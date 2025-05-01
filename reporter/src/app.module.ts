import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { RevenueService } from './services/revenue.filtering.service';
import { EventsService } from './services/events.filtering.service';
import { DemographicsController } from './controllers/demo.controller';
import { EventsController } from './controllers/events.controller';
import { RevenueController } from './controllers/revenue.controller';
import { ReporterListener } from './listeners/reporter.listener';
import { NatsClientModule } from './nats-client/nats.client.module';
import { NatsClientService } from './nats-client/nats.client.service';
import { ReporterService } from './services/reporter.service';
import { DemographicsService } from './services/demo.filtering.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [PrismaModule, NatsClientModule],
  controllers: [DemographicsController, EventsController, RevenueController],
  providers: [RevenueService, EventsService,ReporterListener, ReporterService, DemographicsService, NatsClientService]
})
export class AppModule {}
