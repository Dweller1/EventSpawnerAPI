// src/controllers/demographics.controller.ts
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  UsePipes,
} from "@nestjs/common";
import { DemographicsService } from "./../services/demo.filtering.service";
import { GetDemographicReportDto } from "./../queryDTO/demo.queryDTO";
// import { createZodValidationPipe, ZodValidationPipe } from './../ZodPipe/validation.pipe';
//@UsePipes(createZodValidationPipe(GetDemographicReportSchema))
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LatencyMetrics } from "src/metrics/metrics.service";
import { start } from "repl";

@ApiTags("Reports")
@Controller("reports/demographics")
export class DemographicsController {
  constructor(
    private readonly demographicsService: DemographicsService,
    private readonly latency: LatencyMetrics
  ) {}

  @Get()
  @ApiOperation({ summary: "Get user demographics report" })
  @ApiQuery({ name: "from", required: false, type: String })
  @ApiQuery({ name: "to", required: false, type: String })
  @ApiQuery({ name: "source", required: false, enum: ["facebook", "tiktok"] })
  @ApiResponse({
    status: 200,
    description: "Demographics data retrieved successfully",
  })
  async getDemographicsReport(@Query() filters: GetDemographicReportDto) {
    const timer = this.latency.reporterLatency.startTimer({
      report_type: "demographics",
    });
    try {
      return this.demographicsService.getReport(filters);
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
