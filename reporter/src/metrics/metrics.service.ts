// src/metrics/latency.metrics.ts
import { Histogram } from "prom-client";

export class LatencyMetrics {
  public readonly reporterLatency = new Histogram({
    name: "reporter_latency_seconds",
    help: "Report generation latency by type",
    labelNames: ["report_type"], // 'demographics', 'events', 'revenue'
    buckets: [0.1, 0.5, 1, 2, 5],
  });
}
