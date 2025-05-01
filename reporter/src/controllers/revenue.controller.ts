// src/controllers/revenue.controller.ts
import { Controller, Get, HttpException, HttpStatus, Query, UsePipes } from '@nestjs/common';
import { RevenueService } from './../services/revenue.filtering.service';
import { GetRevenueReportDto } from './../queryDTO/revenue.query.DTO';
//import { createZodValidationPipe, ZodValidationPipe } from './../ZodPipe/validation.pipe';
//@UsePipes(createZodValidationPipe(GetRevenueReportSchema))
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Reports')
@Controller('reports/revenue')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Get()
  @ApiOperation({ 
    summary: 'Get revenue analytics',
    description: 'Returns aggregated revenue data from completed transactions'
  })
  @ApiQuery({ 
    name: 'from', 
    required: false, 
    description: 'Start date (ISO 8601 format)', 
    example: '2025-04-01' 
  })
  @ApiQuery({ 
    name: 'to', 
    required: false, 
    description: 'End date (ISO 8601 format)', 
    example: '2025-04-30' 
  })
  @ApiQuery({ 
    name: 'source', 
    required: false, 
    enum: ['facebook', 'tiktok'],
    description: 'Filter by platform' 
  })
  @ApiQuery({ 
    name: 'campaignId', 
    required: false,
    description: 'Filter by campaign ID (Facebook) or video ID (TikTok)'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Revenue report generated successfully'
  })
  async getRevenueReport(@Query() filters: GetRevenueReportDto) {
    try{
    return this.revenueService.getRevenueReport(filters);
    }catch(error){
      throw new HttpException({
        statusCode: 400,
        message: 'Invalid request',
        details: error.message  // Only in dev
      }, HttpStatus.BAD_REQUEST)
    }
  }
}