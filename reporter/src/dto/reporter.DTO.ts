// report.dtos.ts
import { 
  IsString, 
  IsNumber, 
  IsEnum, 
  IsOptional, 
  IsDateString, 
  ValidateNested 
} from 'class-validator';
import { Type } from 'class-transformer';

// ==================== Shared Enums ====================
export enum Source {
  FACEBOOK = 'facebook',
  TIKTOK = 'tiktok'
}

export enum FunnelStage {
  TOP = 'top',
  BOTTOM = 'bottom'
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  NON_BINARY = 'non-binary'
}

export enum FacebookReferrer {
  NEWSFEED = 'newsfeed',
  MARKETPLACE = 'marketplace',
  GROUPS = 'groups'
}

export enum ClickPosition {
  TOP_LEFT = 'top_left',
  BOTTOM_RIGHT = 'bottom_right',
  CENTER = 'center'
}

export enum Device {
  MOBILE = 'mobile',
  DESKTOP = 'desktop'
}

export enum Browser {
  CHROME = 'Chrome',
  FIREFOX = 'Firefox',
  SAFARI = 'Safari'
}

export enum FacebookEventType {
  AD_VIEW = 'ad.view',
  PAGE_LIKE = 'page.like',
  COMMENT = 'comment',
  VIDEO_VIEW = 'video.view',
  AD_CLICK = 'ad.click',
  FORM_SUBMISSION = 'form.submission',
  CHECKOUT_COMPLETE = 'checkout.complete'
}

export enum TiktokTopEventType {
  VIDEO_VIEW = 'video.view',
  LIKE = 'like',
  SHARE = 'share',
  COMMENT = 'comment'
}

export enum TiktokBottomEventType {
  PROFILE_VISIT = 'profile.visit',
  PURCHASE = 'purchase',
  FOLLOW = 'follow'
}

export enum TiktokDevice {
  ANDROID = 'Android',
  IOS = 'iOS',
  DESKTOP = 'Desktop'
}

// ==================== Shared DTOs ====================
export class UserLocationDto {
  @IsString()
  country: string;

  @IsString()
  city: string;
}

// ==================== Facebook DTOs ====================
export class FacebookUserDto {
  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEnum(Gender)
  gender: Gender;

  @ValidateNested()
  @Type(() => UserLocationDto)
  location: UserLocationDto;
}

export class FacebookEngagementTopDto {
  @IsString()
  actionTime: string;

  @IsEnum(FacebookReferrer)
  referrer: FacebookReferrer;

  @IsString()
  @IsOptional()
  videoId: string | null;
}

export class FacebookEngagementBottomDto {
  @IsString()
  adId: string;

  @IsString()
  campaignId: string;

  @IsEnum(ClickPosition)
  clickPosition: ClickPosition;

  @IsEnum(Device)
  device: Device;

  @IsEnum(Browser)
  browser: Browser;

  @IsString()
  @IsOptional()
  purchaseAmount: string | null;
}

export class FacebookEventDto {
  @IsString()
  eventId: string;

  @IsString()
  @IsDateString()
  timestamp: string;

  @IsEnum(Source)
  source: Source.FACEBOOK;

  @IsEnum(FunnelStage)
  funnelStage: FunnelStage;

  @IsEnum(FacebookEventType)
  eventType: FacebookEventType;

  @ValidateNested()
  @Type(() => FacebookUserDto)
  user: FacebookUserDto;

  @ValidateNested()
  @Type(() => FacebookEngagementTopDto)
  @Type(() => FacebookEngagementBottomDto)
  engagement: FacebookEngagementTopDto | FacebookEngagementBottomDto;
}

// ==================== TikTok DTOs ====================
export class TiktokUserDto {
  @IsString()
  userId: string;

  @IsString()
  username: string;

  @IsNumber()
  followers: number;
}

export class TiktokEngagementTopDto {
  @IsNumber()
  watchTime: number;

  @IsNumber()
  percentageWatched: number;

  @IsEnum(TiktokDevice)
  device: TiktokDevice;

  @IsString()
  country: string;

  @IsString()
  videoId: string;
}

export class TiktokEngagementBottomDto {
  @IsString()
  actionTime: string;

  @IsString()
  @IsOptional()
  profileId: string | null;

  @IsString()
  @IsOptional()
  purchasedItem: string | null;

  @IsString()
  @IsOptional()
  purchaseAmount: string | null;
}

export class TiktokEventDto {
  @IsString()
  eventId: string;

  @IsString()
  @IsDateString()
  timestamp: string;

  @IsEnum(Source)
  source: Source.TIKTOK;

  @IsEnum(FunnelStage)
  funnelStage: FunnelStage;

  @IsEnum([...Object.values(TiktokTopEventType), ...Object.values(TiktokBottomEventType)])
  eventType: TiktokTopEventType | TiktokBottomEventType;

  @ValidateNested()
  @Type(() => TiktokUserDto)
  user: TiktokUserDto;

  @ValidateNested()
  @Type(() => TiktokEngagementTopDto)
  @Type(() => TiktokEngagementBottomDto)
  engagement: TiktokEngagementTopDto | TiktokEngagementBottomDto;
}

// ==================== Union Type ====================
export type ReportDto = FacebookEventDto | TiktokEventDto;

export class ReporterDto {
  @ValidateNested()
  @Type(() => FacebookEventDto, {
    discriminator: {
      property: 'source',
      subTypes: [
        { value: FacebookEventDto, name: Source.FACEBOOK },
        { value: TiktokEventDto, name: Source.TIKTOK }
      ]
    },
    keepDiscriminatorProperty: true
  })
  data: ReportDto;
}