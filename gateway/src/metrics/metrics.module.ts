import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { PrometheusController } from './prometheus.controller';

@Module({
  controllers: [PrometheusController],
  providers: [MetricsService],
  exports: [MetricsService],
})
export class MetricsModule {}
