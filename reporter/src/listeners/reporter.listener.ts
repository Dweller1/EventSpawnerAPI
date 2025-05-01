import { Injectable, Logger, UsePipes } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ReporterService } from '../services/reporter.service';
import { ReportDto  } from './../dto/reporter.DTO';
//import { createZodValidationPipe, ZodValidationPipe } from './../ZodPipe/validation.pipe';
  //@UsePipes(createZodValidationPipe(ReporterType))


@Injectable()
export class ReporterListener {
  constructor(private readonly reporterService: ReporterService) {}
  private readonly logger = new Logger(ReporterListener.name);
  @MessagePattern('reporter.event')
  async handleReporterEvent(@Payload() eventData: ReportDto) {
    try{
    await this.reporterService.handleIncomingEvent(eventData);
    }catch(error){
      this.logger.error('Failed to handle reporter event', error.stack || error.message || error);
    }
  }
}

