// src/services/report.service.ts
import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient} from '@prisma/client';
import { GetEventReportDto } from './../queryDTO/events.queryDTO';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class EventsService {
  //private prisma = new PrismaClient();
constructor(private readonly prisma: PrismaService){}
  async getEventsReport(filters: GetEventReportDto) {
    const { from, to, source, funnelStage, eventType } = filters;

    // Build the where clause
    const whereClause: any = {
      timestamp: {
        gte: from ? new Date(from) : undefined,
        lte: to ? new Date(to) : undefined,
      },
      source: source ? source : undefined,
      funnelStage: funnelStage ? funnelStage : undefined,
      eventType: eventType ? eventType : undefined,
    };

    // Clean up undefined filters
    Object.keys(whereClause).forEach(
      key => whereClause[key] === undefined && delete whereClause[key]
    );
    if (whereClause.timestamp) {
      Object.keys(whereClause.timestamp).forEach(
        key => whereClause.timestamp[key] === undefined && delete whereClause.timestamp[key]
      );
      if (Object.keys(whereClause.timestamp).length === 0) {
        delete whereClause.timestamp;
      }
    }

    // Get total count
    const totalEvents = await this.prisma.event.count({ where: whereClause });

    // Get grouped counts
    const bySource = await this.prisma.event.groupBy({
      by: ['source'],
      where: whereClause,
      _count: true,
    });

    const byFunnelStage = await this.prisma.event.groupBy({
      by: ['funnelStage'],
      where: whereClause,
      _count: true,
    });

    const byEventType = await this.prisma.event.groupBy({
      by: ['eventType'],
      where: whereClause,
      _count: true,
    });

    // Get time series data (events per day)
    const timeSeriesQuery = await this.prisma.$queryRaw<any>`
  SELECT 
    DATE(timestamp) as date,
    COUNT(*) as count
  FROM "Event"
  WHERE ${whereClause}
  GROUP BY DATE(timestamp)
  ORDER BY DATE(timestamp)
`;
  
  const timeSeries = await this.prisma.$queryRawUnsafe(timeSeriesQuery);

    return {
      totalEvents,
      bySource: bySource.map(item => ({
        source: item.source,
        count: item._count,
      })),
      byFunnelStage: byFunnelStage.map(item => ({
        funnelStage: item.funnelStage,
        count: item._count,
      })),
      byEventType: byEventType.map(item => ({
        eventType: item.eventType,
        count: item._count,
      })),
      timeSeries,
    };
  }
}