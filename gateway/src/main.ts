import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { collectDefaultMetrics, Registry } from "prom-client";
import * as http from "http";

async function bootstrap() {
  const logger = new Logger("Gateway");
  const registry = new Registry();
  //collectDefaultMetrics({ registry });

  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe)
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Gateway running (API + metrics)`);
}
bootstrap().catch((err) => {
  console.error("Gateway startup error:", err);
  process.exit(1);
});

// src/main.ts
// import { Logger, ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { json } from 'express';
// import { AppModule } from './app.module';
// // import helmet from 'helmet';
// import * as cookieParser from 'cookie-parser';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // app.use(helmet());
//   app.use(json({ limit: '1mb' }));
//   app.use(cookieParser());

//   app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }));

//   // Add correlation ID to all requests (optional but useful for logging)
//   app.use((req, _, next) => {
//     req.headers['x-correlation-id'] ||= crypto.randomUUID();
//     next();
//   });

//   // Healthcheck routes
//   app.getHttpAdapter().getInstance().get('/health/liveness', (_, res) => res.send('OK'));
//   app.getHttpAdapter().getInstance().get('/health/readiness', (_, res) => res.send('OK'));

//   const PORT = process.env.PORT || 3000;
//   await app.listen(PORT);

//   Logger.log(`🚀 Gateway HTTP service listening on port ${PORT}`);
// }

// bootstrap();
