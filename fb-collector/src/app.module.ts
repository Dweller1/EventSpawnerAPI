import { Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats.client.module';
import { fbMicroserviceController } from './controllers/fb.controller';
import { FbService } from './services/fb.service';
import { PrismaModule } from 'prisma/prisma.module';
import { NatsClientService } from './nats-client/nats.client.service';

@Module({
  imports: [NatsClientModule, PrismaModule],
  controllers: [fbMicroserviceController],
  providers: [FbService, NatsClientService],
})
export class AppModule {}
