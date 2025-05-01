// src/controllers/events.controller.ts
import { Controller, Get, HttpException, HttpStatus, Query, UsePipes } from '@nestjs/common';
import { EventsService } from './../services/events.filtering.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
//import { createZodValidationPipe, ZodValidationPipe } from './../ZodPipe/validation.pipe';
  //@UsePipes(createZodValidationPipe(GetEventReportSchema))
import { GetEventReportDto } from './../queryDTO/events.queryDTO';

@ApiTags('Reports')
@Controller('reports/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @ApiOperation({ 
    summary: 'Get event analytics',
    description: 'Returns aggregated event statistics with filters' 
  })
  @ApiQuery({ name: 'from', required: false, example: '2025-04-01' })
  @ApiQuery({ name: 'to', required: false, example: '2025-04-30' })
  @ApiQuery({ name: 'source', enum: ['facebook', 'tiktok'], required: false })
  @ApiQuery({ name: 'funnelStage', enum: ['top', 'bottom'], required: false })
  @ApiQuery({ name: 'eventType', required: false, example: 'purchase' })
  @ApiResponse({
    status: 200,
    description: `Returns event statistics with breakdowns`
  })
  async getEventsReport(@Query() filters: GetEventReportDto) {
    try{
    return this.eventsService.getEventsReport(filters);
    }catch(error){
      throw new HttpException({
        statusCode: 400,
        message: 'Invalid request',
        details: error.message  // Only in dev
      }, HttpStatus.BAD_REQUEST);
    }
  }
}