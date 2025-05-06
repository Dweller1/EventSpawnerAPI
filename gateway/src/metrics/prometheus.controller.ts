import { Controller, Get, Res } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Response } from 'express';

@Controller()
export class PrometheusController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get('/metrics')
  async getMetrics(@Res() res: Response) {
    res.set('Content-Type', 'text/plain');
    res.send(await this.metricsService.getMetrics());
  }
}
