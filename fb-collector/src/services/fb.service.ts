import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { FacebookEvent } from './../dtos/fb.dto';
import { DatabaseError } from '../errors/database.error'; // Custom error class

@Injectable()
export class FbService {
  private readonly logger = new Logger(FbService.name);

  constructor(private readonly prisma: PrismaService) {}

  async saveEvent(data: FacebookEvent): Promise<void> {
    if (data.source !== 'facebook') {
      this.logger.warn(`Skipping non-Facebook event: ${data.eventId}`);
      return; 
    }

    // 1. Check for duplicate event first
    const existingEvent = await this.prisma.facebookEvent.findUnique({
      where: { id: data.eventId }
    });

    if (existingEvent) {
      this.logger.warn(`Duplicate event detected: ${data.eventId}`);
      return;
    }

    try {
      // 2. Process in transaction
      await this.prisma.$transaction(async (tx) => {
        // 3. Narrow type for engagement data
        const engagementData = 'actionTime' in data.data.engagement 
          ? {
              actionTime: new Date(data.data.engagement.actionTime),
              referrer: data.data.engagement.referrer,
              videoId: data.data.engagement.videoId,
            }
          : {
              adId: data.data.engagement.adId,
              campaignId: data.data.engagement.campaignId,
              clickPosition: data.data.engagement.clickPosition,
              device: data.data.engagement.device,
              browser: data.data.engagement.browser,
              purchaseAmount: data.data.engagement.purchaseAmount,
            };

        // 4. Create with all relations atomically
        await tx.facebookEvent.create({
          data: {
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
            engagementTop: 'actionTime' in data.data.engagement 
              ? { create: engagementData }
              : undefined,
            engagementBottom: 'actionTime' in data.data.engagement
              ? undefined
              : { create: engagementData },
          },
        });

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