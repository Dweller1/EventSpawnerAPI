import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { GetRevenueReportDto } from '../queryDTO/revenue.query.DTO';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RevenueService {
  constructor(private readonly prisma: PrismaService){}

  async getRevenueReport(filters: GetRevenueReportDto) {
    const { from, to, source, campaignId, funnelStage } = filters;

    // Base where clause for revenue-generating events
    const whereClause: any = {
      timestamp: {
        gte: from ? new Date(from) : undefined,
        lte: to ? new Date(to) : undefined,
      },
      source: source ? source : undefined,
      funnelStage: funnelStage ? funnelStage : undefined,
      // Only include revenue-generating events
      eventType: {
        in: ['checkout.complete', 'purchase']
      }
    };

    // Handle campaign filtering differently for each platform
    if (campaignId) {
      whereClause.OR = [
        { 
          source: 'facebook',
          facebookEngagement: {
            campaignId: campaignId
          }
        },
        {
          source: 'tiktok',
          tiktokEngagement: {
            videoId: campaignId // Using videoId as campaign equivalent for TikTok
          }
        }
      ];
    }

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

    // Get all revenue-generating events with related data
    const events = await this.prisma.event.findMany({
      where: whereClause,
      include: {
        facebookEngagement: true,
        tiktokEngagement: true,
      },
    });

    // Process events to calculate revenue metrics
    let totalRevenue = 0;
    let totalTransactions = 0;
    const bySource = {
      facebook: { revenue: 0, transactions: 0 },
      tiktok: { revenue: 0, transactions: 0 },
    };
    const byCampaign = new Map<string, { revenue: number, transactions: number }>();
    const timeSeries = new Map<string, { revenue: number, transactions: number }>();

    events.forEach(event => {
      // Extract purchase amount based on source
      let amount = 0;
      let campaign: string | null = null;
      
      if (event.source === 'facebook' && event.facebookEngagement) {
        amount = parseFloat(event.facebookEngagement.purchaseAmount || '0');
        campaign = event.facebookEngagement.campaignId || null;
      } 
      else if (event.source === 'tiktok' && event.tiktokEngagement) {
        amount = parseFloat(event.tiktokEngagement.purchaseAmount || '0');
        campaign = event.tiktokEngagement.videoId || null; // Using videoId as campaign identifier
      }

      // Skip if no purchase amount (shouldn't happen due to our query filter)
      if (amount <= 0) return;

      const date = event.timestamp.toISOString().split('T')[0];

      // Update totals
      totalRevenue += amount;
      totalTransactions += 1;

      // Update by source
      bySource[event.source].revenue += amount;
      bySource[event.source].transactions += 1;

      // Update by campaign
      if (campaign) {
        const campaignData = byCampaign.get(campaign) || { revenue: 0, transactions: 0 };
        campaignData.revenue += amount;
        campaignData.transactions += 1;
        byCampaign.set(campaign, campaignData);
      }

      // Update time series
      const dateData = timeSeries.get(date) || { revenue: 0, transactions: 0 };
      dateData.revenue += amount;
      dateData.transactions += 1;
      timeSeries.set(date, dateData);
    });

    // Format the response
    return {
      totalRevenue,
      totalTransactions,
      averageOrderValue: totalTransactions > 0 ? totalRevenue / totalTransactions : 0,
      bySource: Object.entries(bySource).map(([source, data]) => ({
        source,
        ...data,
      })),
      byCampaign: Array.from(byCampaign.entries()).map(([campaignId, data]) => ({
        campaignId,
        ...data,
      })),
      timeSeries: Array.from(timeSeries.entries()).map(([date, data]) => ({
        date,
        ...data,
      })),
    };
  }
}