// src/reporter/reporter.service.ts
import { Injectable } from '@nestjs/common';
import { 
  ReportDto, 
  FacebookEventDto, 
  TiktokEventDto,
  FacebookEngagementTopDto,
  FacebookEngagementBottomDto,
  TiktokEngagementTopDto,
  TiktokEngagementBottomDto,
  Source,
  FunnelStage,
  Gender,
  FacebookReferrer,
  ClickPosition,
  Device,
  TiktokDevice
} from '../dto/reporter.DTO';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class ReporterService {
  constructor(private readonly prisma: PrismaService) {}

  private mapGender(gender: Gender): 'male' | 'female' | 'non_binary' {
    switch(gender) {
      case Gender.MALE: return 'male';
      case Gender.FEMALE: return 'female';
      case Gender.NON_BINARY: return 'non_binary';
      default: throw new Error(`Invalid gender: ${gender}`);
    }
  }

  private mapReferrer(referrer: FacebookReferrer): 'newsfeed' | 'marketplace' | 'groups' {
    switch(referrer) {
      case FacebookReferrer.NEWSFEED: return 'newsfeed';
      case FacebookReferrer.MARKETPLACE: return 'marketplace';
      case FacebookReferrer.GROUPS: return 'groups';
      default: throw new Error(`Invalid referrer: ${referrer}`);
    }
  }

  private mapClickPosition(position: ClickPosition): 'top_left' | 'bottom_right' | 'center' {
    switch(position) {
      case ClickPosition.TOP_LEFT: return 'top_left';
      case ClickPosition.BOTTOM_RIGHT: return 'bottom_right';
      case ClickPosition.CENTER: return 'center';
      default: throw new Error(`Invalid click position: ${position}`);
    }
  }

  private mapDevice(device: Device): 'mobile' | 'desktop' {
    switch(device) {
      case Device.MOBILE: return 'mobile';
      case Device.DESKTOP: return 'desktop';
      default: throw new Error(`Invalid device: ${device}`);
    }
  }

  private mapTiktokDevice(device: TiktokDevice): 'Android' | 'iOS' | 'Desktop' {
    switch(device) {
      case TiktokDevice.ANDROID: return 'Android';
      case TiktokDevice.IOS: return 'iOS';
      case TiktokDevice.DESKTOP: return 'Desktop';
      default: throw new Error(`Invalid Tiktok device: ${device}`);
    }
  }
    
  async handleIncomingEvent(event: ReportDto) {
    try {
      if (isFacebookEvent(event)) {
        await this.handleFacebookEvent(event);
      } else if (isTiktokEvent(event)) {
        await this.handleTiktokEvent(event);
      } else {
        throw new Error(`Unsupported event type`);
      }
    } catch (error) {
      console.error('Error processing event:', error);
      throw error;
    }
  }

  private async handleFacebookEvent(event: FacebookEventDto) {
    const { user, engagement } = event;

    // Create Facebook User
    const facebookUser = await this.prisma.facebookUser.create({
      data: {
        userId: user.userId,
        name: user.name,
        age: user.age,
        gender: this.mapGender(user.gender),
        country: user.location.country,
        city: user.location.city,
      },
    });

    // Create Facebook Engagement based on funnel stage
    let facebookEngagement;
    if (event.funnelStage === FunnelStage.TOP) {
      const topEngagement = engagement as FacebookEngagementTopDto;
      facebookEngagement = await this.prisma.facebookEngagement.create({
        data: {
          actionTime: new Date(topEngagement.actionTime),
          referrer: topEngagement.referrer ? this.mapReferrer(topEngagement.referrer) : null,
          videoId: topEngagement.videoId || null,
        },
      });
    } else {
      const bottomEngagement = engagement as FacebookEngagementBottomDto;
      facebookEngagement = await this.prisma.facebookEngagement.create({
        data: {
          adId: bottomEngagement.adId,
          campaignId: bottomEngagement.campaignId,
          clickPosition: bottomEngagement.clickPosition ? 
            this.mapClickPosition(bottomEngagement.clickPosition) : null,
          device: bottomEngagement.device ? 
            this.mapDevice(bottomEngagement.device) : null,
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

  private async handleTiktokEvent(event: TiktokEventDto) {
    const { user, engagement } = event;

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
    if (event.funnelStage === FunnelStage.TOP) {
      const topEngagement = engagement as TiktokEngagementTopDto;
      tiktokEngagement = await this.prisma.tiktokEngagement.create({
        data: {
          watchTime: topEngagement.watchTime,
          percentageWatched: topEngagement.percentageWatched,
          device: topEngagement.device ? 
            this.mapTiktokDevice(topEngagement.device) : null,
          country: topEngagement.country,
          videoId: topEngagement.videoId,
        },
      });
    } else {
      const bottomEngagement = engagement as TiktokEngagementBottomDto;
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

// Type guards
function isFacebookEvent(event: ReportDto): event is FacebookEventDto {
  return event.source === Source.FACEBOOK;
}

function isTiktokEvent(event: ReportDto): event is TiktokEventDto {
  return event.source === Source.TIKTOK;
}