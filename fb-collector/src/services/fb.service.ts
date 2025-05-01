import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { FacebookEvent } from './../dtos/fb.dto';
import { DatabaseError } from '../errors/database.error';

@Injectable()
export class FbService {
  private readonly logger = new Logger(FbService.name);

  constructor(private readonly prisma: PrismaService) {}

  async saveEvent(data: FacebookEvent): Promise<void> {
    if (data.source !== 'facebook') {
      this.logger.warn(`Skipping non-Facebook event: ${data.eventId}`);
      return;
    }

    try {
      await this.prisma.$transaction(async (tx) => {
        // Check for duplicate event
        const existingEvent = await tx.facebookEvent.findUnique({
          where: { id: data.eventId }
        });

        if (existingEvent) {
          this.logger.warn(`Duplicate event detected: ${data.eventId}`);
          return;
        }

        // Base event data
        const eventData = {
          id: data.eventId,
          timestamp: new Date(data.timestamp),
          source: data.source,
          funnelStage: data.funnelStage,
          eventType: data.eventType,
          userId: data.data.user.userId,
          userName: data.data.user.name,
          userAge: data.data.user.age,
          userGender: data.data.user.gender,
          userCountry: data.data.user.location.country,
          userCity: data.data.user.location.city,
        };

        if (data.funnelStage === 'top') {
          const topEngagement = data.data.engagement;
          if ('actionTime' in topEngagement) {
            await tx.facebookEvent.create({
              data: {
                ...eventData,
                engagementTop: {
                  create: {
                    actionTime: new Date(topEngagement.actionTime),
                    referrer: topEngagement.referrer,
                    videoId: topEngagement.videoId || null,
                  }
                }
              }
            });
          }
        } else {
          const bottomEngagement = data.data.engagement;
          if ('adId' in bottomEngagement) {
            await tx.facebookEvent.create({
              data: {
                ...eventData,
                engagementBottom: {
                  create: {
                    adId: bottomEngagement.adId,
                    campaignId: bottomEngagement.campaignId,
                    clickPosition: bottomEngagement.clickPosition,
                    device: bottomEngagement.device,
                    browser: bottomEngagement.browser,
                    purchaseAmount: bottomEngagement.purchaseAmount || null,
                  }
                }
              }
            });
          }
        }

        this.logger.log(`Event saved successfully: ${data.eventId}`);
      });
    } catch (error) {
      this.logger.error(`Failed to save event ${data.eventId}`, {
        error: error.message,
        stack: error.stack,
      });
      throw new DatabaseError('Failed to save Facebook event', error);
    }
  }
}