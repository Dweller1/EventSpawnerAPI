// src/metrics/metrics.service.ts
import { Injectable } from "@nestjs/common";
import { Counter, Histogram } from "prom-client";

@Injectable()
export class MetricsService {
  // Event counters
  public readonly acceptedEvents: Counter<string>;
  public readonly processedEvents: Counter<string>;
  public readonly failedEvents: Counter<string>;

  // Processing time
  public readonly processingTime: Histogram<string>;

  constructor() {
    // Initialize counters with service-specific prefix
    this.acceptedEvents = new Counter({
      name: "fb_events_accepted_total",
      help: "Total events accepted by the collector",
      labelNames: ["event_type"],
    });

    this.processedEvents = new Counter({
      name: "fb_events_processed_total",
      help: "Total events successfully processed",
      labelNames: ["event_type"],
    });

    this.failedEvents = new Counter({
      name: "fb_events_failed_total",
      help: "Total events that failed processing",
      labelNames: ["event_type", "error_code"],
    });

    this.processingTime = new Histogram({
      name: "fb_processing_seconds",
      help: "Event processing time distribution",
      labelNames: ["event_type"],
      buckets: [0.1, 0.5, 1, 2, 5],
    });
  }
}
