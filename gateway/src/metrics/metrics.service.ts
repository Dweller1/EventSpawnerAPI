import { Injectable } from '@nestjs/common';
import { Counter, Registry } from 'prom-client';

@Injectable()
export class MetricsService {
  private readonly registry = new Registry();

  public acceptedEvents = new Counter({
    name: 'gateway_events_accepted_total',
    help: 'Total events accepted by gateway',
    registers: [this.registry],
  });

  public processedEvents = new Counter({
    name: 'gateway_events_processed_total',
    help: 'Total events successfully processed',
    registers: [this.registry],
  });

  public failedEvents = new Counter({
    name: 'gateway_events_failed_total',
    help: 'Total events that failed processing',
    registers: [this.registry],
  });

  async getMetrics() {
    return this.registry.metrics();
  }
}
