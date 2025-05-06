// src/metrics/metrics.module.ts
import { Module, OnModuleInit } from "@nestjs/common";
import {
  Registry,
  collectDefaultMetrics,
  Counter,
  Histogram,
} from "prom-client";

@Module({})
export class MetricsModule implements OnModuleInit {
  public readonly registry = new Registry();
  public readonly natsEventsCounter: Counter<string>;
  public readonly processingTimeHistogram: Histogram<string>;

  constructor() {
    // Add default Node.js metrics
    collectDefaultMetrics({ register: this.registry });
  }

  onModuleInit() {
    this.registry.setDefaultLabels({
      service: "reporter",
    });
  }
}
