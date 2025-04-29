import { Module } from '@nestjs/common';
import { fbModule } from './modules/fb.module';
import { NatsClientModule } from './nats-client/nats.client.module';
import { fbMicroserviceController } from './controllers/fb.controller';
import { FbService } from './services/fb.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [fbModule, NatsClientModule, PrismaModule],
  controllers: [fbMicroserviceController],
  providers: [FbService],
})
export class AppModule {}
