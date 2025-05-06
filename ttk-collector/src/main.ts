import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { collectDefaultMetrics, Registry } from 'prom-client';
import { MetricsService } from './metrics/metrics.service';
import * as http from 'http';

async function bootstrap() {
  const logger = new Logger('ttk-collector');
  const registry = new Registry();

  // 1. Metrics Configuration
  collectDefaultMetrics({
    register: registry,
    prefix: 'ttk_collector_',
  });

  // 2. Hybrid App Initialization
  const app = await NestFactory.create(AppModule);

  // 3. NATS Microservice Setup
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [process.env.NATS_URL || 'nats://nats:4222'],
      queue: 'ttk-collector-queue',
    },
  });

  // 4. Metrics Registration
  const metricsService = app.get(MetricsService);
  registry.registerMetric(metricsService.acceptedEvents);
  registry.registerMetric(metricsService.processingTime);
  registry.registerMetric(metricsService.processedEvents);
  registry.registerMetric(metricsService.failedEvents);

  // 5. Start Services
  await app.startAllMicroservices();

  // 6. HTTP Metrics Endpoint
  const metricsServer = http.createServer(async (req, res) => {
    if (req.url === '/metrics') {
      try {
        res.setHeader('Content-Type', registry.contentType);
        res.end(await registry.metrics());
      } catch (err) {
        res.statusCode = 500;
        res.end(err.message);
        logger.error('Metrics generation failed', err.stack);
      }
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  });

  const metricsPort = process.env.METRICS_PORT || 3002;
  metricsServer.listen(metricsPort, () => {
    logger.log(`Metrics available at http://0.0.0.0:${metricsPort}/metrics`);
  });

  // 7. Graceful Shutdown
  app.enableShutdownHooks();
  metricsServer.on('close', () => logger.log('Metrics server stopped'));

  logger.log(`ttk-collector service is running`);
}

bootstrap().catch((err) => {
  console.error(`Failed to start service:`, err);
  process.exit(1);
});
