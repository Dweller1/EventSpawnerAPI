import { IsOptional, IsEnum, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export enum Source {
  FACEBOOK = 'facebook',
  TIKTOK = 'tiktok'
}

export class GetDemographicReportDto {
  @IsOptional()
  @IsDateString()
  from?: string;

  @IsOptional()
  @IsDateString()
  to?: string;

  @IsOptional()
  @IsEnum(Source)
  source?: Source;
}
