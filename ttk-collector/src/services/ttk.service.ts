import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { TiktokEvent } from './../dtos/ttk.dto';
import { DatabaseError } from '../errors/database.error';

@Injectable()
export class TiktokService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: Logger
  ) {}

  async saveEvent(data: TiktokEvent) {
    this.logger.debug(`Processing TikTok event: ${data.eventId}`);

    try {
      // 1. Check for duplicates
      const existing = await this.prisma.tiktokEvent.findUnique({
        where: { eventId: data.eventId }
      });
      if (existing) {
        this.logger.warn(`Duplicate event detected: ${data.eventId}`);
        return existing;
      }

      // 2. Prepare engagement data
      const engagementData = 'watchTime' in data.data.engagement
        ? {
            watchTime: data.data.engagement.watchTime,
            percentageWatched: data.data.engagement.percentageWatched,
            device: data.data.engagement.device,
            country: data.data.engagement.country,
            videoId: data.data.engagement.videoId,
          }
        : {
            actionTime: data.data.engagement.actionTime,
            profileId: data.data.engagement.profileId,
            purchasedItem: data.data.engagement.purchasedItem,
            purchaseAmount: data.data.engagement.purchaseAmount,
          };

      // 3. Save to database
      return await this.prisma.tiktokEvent.create({
        data: {
          eventId: data.eventId,
          timestamp: new Date(data.timestamp),
          source: data.source,
          funnelStage: data.funnelStage,
          eventType: data.eventType,
          user: {
            create: {
              userId: data.data.user.userId,
              username: data.data.user.username,
              followers: data.data.user.followers,
            },
          },
          engagement: {
            create: engagementData,
          },
        },
      });

    } catch (error) {
      this.logger.error(`Database operation failed for event ${data.eventId}`, {
        error: error.message,
        stack: error.stack,
        eventData: { 
          id: data.eventId,
          type: data.eventType 
        }
      });

      throw new DatabaseError(
        'Failed to save TikTok event',
        {
          eventId: data.eventId,
          eventType: data.eventType
        },
        error
      );
    }
  }
}
