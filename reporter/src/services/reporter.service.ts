// src/reporter/reporter.service.ts
import { Injectable } from '@nestjs/common';
import { 
  ReportDTO, 
  FacebookEventSchema, 
  TiktokEventSchema,
  FacebookEngagementTop,
  FacebookEngagementBottom,
  TiktokEngagementTopSchema,
  TiktokEngagementBottomSchema
} from '../dto/reporter.DTO';
import { z } from 'zod';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class ReporterService {
  constructor(private readonly prisma: PrismaService) {}
    
  async handleIncomingEvent(event: ReportDTO) {
    try {
      if (event.source === 'facebook') {
        const parsedEvent = FacebookEventSchema.parse(event);
        await this.handleFacebookEvent(parsedEvent);
      } else if (event.source === 'tiktok') {
        const parsedEvent = TiktokEventSchema.parse(event);
        await this.handleTiktokEvent(parsedEvent);
      } else {
        throw new Error(`Unsupported source: ${(event as {source: string}).source}`);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
        throw new Error(`Invalid event data: ${error.message}`);
      }
      throw error;
    }
  }

  private async handleFacebookEvent(event: z.infer<typeof FacebookEventSchema>) {
    const { user, engagement } = event.data;

    // Create Facebook User
    const facebookUser = await this.prisma.facebookUser.create({
      data: {
        userId: user.userId,
        name: user.name,
        age: user.age,
        gender: user.gender === 'non-binary' ? 'non_binary' : user.gender,
        country: user.location.country,
        city: user.location.city,
      },
    });

    // Create Facebook Engagement based on funnel stage
    let facebookEngagement;
    if (event.funnelStage === 'top') {
      const topEngagement = FacebookEngagementTop.parse(engagement);
      facebookEngagement = await this.prisma.facebookEngagement.create({
        data: {
          actionTime: new Date(topEngagement.actionTime),
          referrer: topEngagement.referrer,
          videoId: topEngagement.videoId || null,
        },
      });
    } else {
      const bottomEngagement = FacebookEngagementBottom.parse(engagement);
      facebookEngagement = await this.prisma.facebookEngagement.create({
        data: {
          adId: bottomEngagement.adId,
          campaignId: bottomEngagement.campaignId,
          clickPosition: bottomEngagement.clickPosition,
          device: bottomEngagement.device,
          browser: bottomEngagement.browser,
          purchaseAmount: bottomEngagement.purchaseAmount || null,
        },
      });
    }

    // Create Event with all relations
    await this.prisma.event.create({
      data: {
        eventId: event.eventId,
        timestamp: new Date(event.timestamp),
        source: 'facebook',
        funnelStage: event.funnelStage,
        eventType: event.eventType,
        facebookUserId: facebookUser.id,
        facebookEngagementId: facebookEngagement.id,
      },
    });
  }

  private async handleTiktokEvent(event: z.infer<typeof TiktokEventSchema>) {
    const { user, engagement } = event.data;

    // Create Tiktok User
    const tiktokUser = await this.prisma.tiktokUser.create({
      data: {
        userId: user.userId,
        username: user.username,
        followers: user.followers,
      },
    });

    // Create Tiktok Engagement based on funnel stage
    let tiktokEngagement;
    if (event.funnelStage === 'top') {
      const topEngagement = TiktokEngagementTopSchema.parse(engagement);
      tiktokEngagement = await this.prisma.tiktokEngagement.create({
        data: {
          watchTime: topEngagement.watchTime,
          percentageWatched: topEngagement.percentageWatched,
          device: topEngagement.device,
          country: topEngagement.country,
          videoId: topEngagement.videoId,
        },
      });
    } else {
      const bottomEngagement = TiktokEngagementBottomSchema.parse(engagement);
      tiktokEngagement = await this.prisma.tiktokEngagement.create({
        data: {
          actionTime: new Date(bottomEngagement.actionTime),
          profileId: bottomEngagement.profileId || null,
          purchasedItem: bottomEngagement.purchasedItem || null,
          purchaseAmount: bottomEngagement.purchaseAmount || null,
        },
      });
    }

    // Create Event with all relations
    await this.prisma.event.create({
      data: {
        eventId: event.eventId,
        timestamp: new Date(event.timestamp),
        source: 'tiktok',
        funnelStage: event.funnelStage,
        eventType: event.eventType,
        tiktokUserId: tiktokUser.id,
        tiktokEngagementId: tiktokEngagement.id,
      },
    });
  }
}