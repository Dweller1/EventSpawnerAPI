import { IsOptional, IsEnum, IsDateString, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export enum Source {
  FACEBOOK = 'facebook',
  TIKTOK = 'tiktok'
}

export enum FunnelStage {
  TOP = 'top',
  BOTTOM = 'bottom'
}

export class GetRevenueReportDto {
  @IsOptional()
  @IsDateString()
  from?: string;

  @IsOptional()
  @IsDateString()
  to?: string;

  @IsOptional()
  @IsEnum(Source)
  source?: Source;

  @IsOptional()
  @IsString()
  campaignId?: string;

  @IsOptional()
  @IsEnum(FunnelStage)
  funnelStage?: FunnelStage;
}