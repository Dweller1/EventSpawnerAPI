// src/services/demographics.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { GetDemographicReportDto } from '../dto/../queryDTO/demo.queryDTO';

// Manual types since Prisma types aren't available
export interface EventWhereInput {
  timestamp?: {
    gte?: Date;
    lte?: Date;
  };
  source?: 'facebook' | 'tiktok';
}

export interface FacebookUserData {
  age: number;
  gender: string;
  country: string;
  city: string;
}

export interface TiktokUserData {
  followers: number;
  username: string;
}

export interface FacebookStats {
  totalUsers: number;
  ageStatistics: {
    average: number;
    distribution: Record<'18-24' | '25-34' | '35-44' | '45+', number>;
  };
  genderDistribution: Record<string, number>;
  locationStatistics: {
    countries: Record<string, number>;
    topCities: [string, number][];
  };
}

export interface TiktokStats {
  totalUsers: number;
  followerStatistics: {
    average: number;
    distribution: Record<'0-1000' | '1001-5000' | '5001-10000' | '10000+', number>;
  };
  topAccounts: Array<{
    username: string;
    followers: number;
  }>;
}

@Injectable()
export class DemographicsService {
  constructor(private readonly prisma: PrismaService) {}

  async getReport(filters: GetDemographicReportDto) {
    const where = this.buildWhereClause(filters);

    const events = await this.prisma.event.findMany({
      where,
      include: {
        facebookUser: true,
        tiktokUser: true,
      },
    });

    const { facebookData, tiktokData } = this.processEvents(events);

    return {
      facebook: facebookData.length ? this.calculateFacebookStats(facebookData) : null,
      tiktok: tiktokData.length ? this.calculateTiktokStats(tiktokData) : null,
      totalUsers: facebookData.length + tiktokData.length,
    };
  }

  private buildWhereClause(filters: GetDemographicReportDto): EventWhereInput {
    const where: EventWhereInput = {};

    if (filters.from || filters.to) {
      where.timestamp = {};
      if (filters.from) where.timestamp.gte = new Date(filters.from);
      if (filters.to) where.timestamp.lte = new Date(filters.to);
    }

    if (filters.source) {
      where.source = filters.source;
    }

    return where;
  }

  private processEvents(events: any[]) {
    const facebookData: FacebookUserData[] = [];
    const tiktokData: TiktokUserData[] = [];

    events.forEach(event => {
      if (event.source === 'facebook' && event.facebookUser) {
        facebookData.push({
          age: event.facebookUser.age,
          gender: event.facebookUser.gender,
          country: event.facebookUser.country,
          city: event.facebookUser.city,
        });
      } else if (event.source === 'tiktok' && event.tiktokUser) {
        tiktokData.push({
          followers: event.tiktokUser.followers,
          username: event.tiktokUser.username,
        });
      }
    });

    return { facebookData, tiktokData };
  }

  private calculateFacebookStats(data: FacebookUserData[]): FacebookStats {
    const ageGroups = { '18-24': 0, '25-34': 0, '35-44': 0, '45+': 0 };
    const genderDist: Record<string, number> = {};
    const countries: Record<string, number> = {};
    const cities: Record<string, number> = {};

    let ageSum = 0;

    data.forEach(user => {
      // Age calculation
      if (user.age <= 24) ageGroups['18-24']++;
      else if (user.age <= 34) ageGroups['25-34']++;
      else if (user.age <= 44) ageGroups['35-44']++;
      else ageGroups['45+']++;
      ageSum += user.age;

      // Gender distribution
      genderDist[user.gender] = (genderDist[user.gender] || 0) + 1;

      // Location stats
      countries[user.country] = (countries[user.country] || 0) + 1;
      cities[user.city] = (cities[user.city] || 0) + 1;
    });

    return {
      totalUsers: data.length,
      ageStatistics: {
        average: Math.round(ageSum / data.length),
        distribution: ageGroups,
      },
      genderDistribution: genderDist,
      locationStatistics: {
        countries,
        topCities: Object.entries(cities)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5),
      },
    };
  }

  private calculateTiktokStats(data: TiktokUserData[]): TiktokStats {
    const followerGroups = { '0-1000': 0, '1001-5000': 0, '5001-10000': 0, '10000+': 0 };
    let followerSum = 0;

    data.forEach(user => {
      if (user.followers <= 1000) followerGroups['0-1000']++;
      else if (user.followers <= 5000) followerGroups['1001-5000']++;
      else if (user.followers <= 10000) followerGroups['5001-10000']++;
      else followerGroups['10000+']++;
      followerSum += user.followers;
    });

    return {
      totalUsers: data.length,
      followerStatistics: {
        average: Math.round(followerSum / data.length),
        distribution: followerGroups,
      },
      topAccounts: [...data]
        .sort((a, b) => b.followers - a.followers)
        .slice(0, 5)
        .map(user => ({
          username: user.username,
          followers: user.followers,
        })),
    };
  }
}