import { Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats.client.module';
import { ttkModule } from './modules/ttk.module';
import { ttkMicroserviceController } from './controllers/ttk.controller';
import { TiktokService } from './services/ttk.service';


@Module({
  imports: [NatsClientModule, ttkModule],
  controllers: [ttkMicroserviceController],
  providers: [TiktokService],
})
export class AppModule {}
