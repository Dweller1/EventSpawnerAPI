// src/controllers/events.controller.ts
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  UsePipes,
} from "@nestjs/common";
import { EventsService } from "./../services/events.filtering.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
//import { createZodValidationPipe, ZodValidationPipe } from './../ZodPipe/validation.pipe';
//@UsePipes(createZodValidationPipe(GetEventReportSchema))
import { GetEventReportDto } from "./../queryDTO/events.queryDTO";
import { LatencyMetrics } from "src/metrics/metrics.service";

@ApiTags("Reports")
@Controller("reports/events")
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
    private readonly latency: LatencyMetrics
  ) {}

  @Get()
  @ApiOperation({
    summary: "Get event analytics",
    description: "Returns aggregated event statistics with filters",
  })
  @ApiQuery({ name: "from", required: false, example: "2025-04-01" })
  @ApiQuery({ name: "to", required: false, example: "2025-04-30" })
  @ApiQuery({ name: "source", enum: ["facebook", "tiktok"], required: false })
  @ApiQuery({ name: "funnelStage", enum: ["top", "bottom"], required: false })
  @ApiQuery({ name: "eventType", required: false, example: "purchase" })
  @ApiResponse({
    status: 200,
    description: `Returns event statistics with breakdowns`,
  })
  async getEventsReport(@Query() filters: GetEventReportDto) {
    const timer = this.latency.reporterLatency.startTimer({
      report_type: "events",
    });

    try {
      return this.eventsService.getEventsReport(filters);
    } catch (error) {
      throw new HttpException(
        {
          statusCode: 400,
          message: "Invalid request",
          details: error.message,
        },
        HttpStatus.BAD_REQUEST
      );
    } finally {
      timer();
    }
  }
}
