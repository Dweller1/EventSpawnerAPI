import { Logger, Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats.client.module';
import { ttkMicroserviceController } from './controllers/ttk.controller';
import { TiktokService } from './services/ttk.service';
import { NatsClientService } from './nats-client/nats.client.service';
import { PrismaModule } from 'prisma/prisma.module';


@Module({
  imports: [NatsClientModule, PrismaModule],
  controllers: [ttkMicroserviceController],
  providers: [TiktokService, NatsClientService, Logger],
})
export class AppModule {}
