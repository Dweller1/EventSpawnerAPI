import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";
import { collectDefaultMetrics, Registry } from "prom-client";
import { MetricsService } from "./metrics/metrics.service";
import * as http from "http";

async function bootstrap() {
  const logger = new Logger("fb-collector");
  const registry = new Registry();

  // 1. Initialize default metrics
  collectDefaultMetrics({
    register: registry,
    prefix: "fb_collector_",
  });

  // 2. Create hybrid application (HTTP + Microservice)
  const app = await NestFactory.create(AppModule);

  // 3. Connect NATS microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL || "nats://nats:4222"],
      queue: "fb-collector-queue",
    },
  });

  // 4. Get metrics service and register custom metrics
  const metricsService = app.get(MetricsService);
  registry.registerMetric(metricsService.acceptedEvents);
  registry.registerMetric(metricsService.processingTime);
  registry.registerMetric(metricsService.processedEvents);
  registry.registerMetric(metricsService.failedEvents);

  // 5. Start all microservices
  await app.startAllMicroservices();

  // 6. Create HTTP server for metrics
  const metricsServer = http.createServer(async (req, res) => {
    if (req.url === "/metrics") {
      try {
        res.setHeader("Content-Type", registry.contentType);
        res.end(await registry.metrics());
      } catch (err) {
        res.statusCode = 500;
        res.end(err.message);
      }
    } else {
      res.statusCode = 404;
      res.end("Not Found");
    }
  });

  // 7. Start metrics server
  const metricsPort = process.env.METRICS_PORT || 3001;
  metricsServer.listen(metricsPort, () => {
    logger.log(`Metrics server listening on port ${metricsPort}`);
  });

  // 8. Enable shutdown hooks
  app.enableShutdownHooks();
  metricsServer.on("close", () => logger.log("Metrics server closed"));

  logger.log("fb-collector service is running");
}

bootstrap().catch((err) => {
  console.error("fb-collector bootstrap failed:", err);
  process.exit(1);
});
// import { NestFactory } from "@nestjs/core";
// import { AppModule } from "./app.module";
// import { MicroserviceOptions, Transport } from "@nestjs/microservices";
// import { MetricsModule } from "./metrics/metrics.module";

// async function bootstrap() {
//   // Hybrid app (HTTP + NATS)
//   const app = await NestFactory.create(AppModule);

//   const metricsModule = app.get(MetricsModule);

//   // 1. Setup NATS
//   app.connectMicroservice<MicroserviceOptions>({
//     transport: Transport.NATS,
//     options: {
//       servers: ["nats://nats"],
//       disconnectOnClose: true,
//     },
//   });

//   // 2. Add metrics endpoint
//   app.getHttpAdapter().get("/metrics", async (req, res) => {
//     try {
//       res.set("Content-Type", metricsModule.registry.contentType);
//       res.end(await metricsModule.registry.metrics());
//     } catch (err) {
//       res.status(500).end("Error generating metrics");
//     }
//   });

//   // 3. Start everything
//   await app.startAllMicroservices();
//   await app.listen(3001); // Different port than gateway
//   console.log(`NATS listener + metrics on port 3001`);
// }
// bootstrap();
