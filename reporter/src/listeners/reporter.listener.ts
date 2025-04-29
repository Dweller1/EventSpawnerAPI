import { Injectable, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ReporterService } from '../services/reporter.service';
import { ReportDTO } from './../dto/reporter.DTO';

@Injectable()
export class ReporterListener {
  constructor(private readonly reporterService: ReporterService) {}
  private readonly logger = new Logger(ReporterListener.name);
  @MessagePattern('reporter.event')
  async handleReporterEvent(@Payload() eventData: ReportDTO) {
    try{
    await this.reporterService.handleIncomingEvent(eventData);
    }catch(error){
      this.logger.error('Failed to handle reporter event', error.stack || error.message || error);
    }
  }
}

