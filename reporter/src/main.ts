import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Logger, ValidationPipe } from "@nestjs/common";
import { collectDefaultMetrics, Registry } from "prom-client";
import * as http from "http";
import { LatencyMetrics } from "./metrics/metrics.service";

async function bootstrap() {
  const logger = new Logger("Reporter");
  const registry = new Registry();

  // 1. Prometheus setup
  collectDefaultMetrics({
    register: registry,
    prefix: "reporter_",
  });

  // 2. Hybrid app (HTTP + Microservice)
  const app = await NestFactory.create(AppModule);

  // 3. NATS Microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL || "nats://nats:4222"],
      queue: "reporter-queue",
    },
  });

  // 4. Register your metrics service
  const metricsService = app.get(LatencyMetrics);
  //registry.registerMetric(metricsService.processedEvents);
  //registry.registerMetric(metricsService.latencyHistogram);

  // 5. Validation (for both HTTP and NATS)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  // 6. Start services
  await app.startAllMicroservices();

  // 7. Dedicated metrics server (port 3001)
  const metricsServer = http.createServer(async (req, res) => {
    if (req.url === "/metrics") {
      res.setHeader("Content-Type", registry.contentType);
      res.end(await registry.metrics());
    } else {
      res.statusCode = 404;
      res.end();
    }
  });

  // 8. Start both servers
  const apiPort = process.env.PORT || 4000;
  const metricsPort = process.env.METRICS_PORT || 3003;

  await app.listen(apiPort);
  metricsServer.listen(metricsPort, () => {
    logger.log(`API: http://localhost:${apiPort}`);
    logger.log(`Metrics: http://localhost:${metricsPort}/metrics`);
  });

  // 9. Graceful shutdown
  app.enableShutdownHooks();
  metricsServer.on("close", () => logger.log("Metrics server stopped"));
}

bootstrap().catch((err) => {
  console.error("Reporter failed to start:", err);
  process.exit(1);
});
