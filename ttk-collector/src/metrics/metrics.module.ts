// src/metrics/metrics.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { Registry, collectDefaultMetrics } from 'prom-client';

@Module({})
export class MetricsModule implements OnModuleInit {
  public readonly registry = new Registry();

  constructor() {
    // Add default Node.js metrics
    collectDefaultMetrics({ register: this.registry });
  }

  onModuleInit() {
    this.registry.setDefaultLabels({
      service: 'ttk-collector',
    });
  }
}
