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

export class GetEventReportDto {
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
  @IsEnum(FunnelStage)
  funnelStage?: FunnelStage;

  @IsOptional()
  @IsString()
  eventType?: string;
}