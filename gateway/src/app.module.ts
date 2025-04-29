import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayModule } from './webhooks/gateway.module';
import { NatsClientModule } from './nats-client/nats-client.module';
import { EventProcessorService } from './webhooks/services/event.processor.service';
import { TransformationService } from './webhooks/services/transformation.service';
import { NatsClientService } from './nats-client/nats.client.service';
import { WebhookController } from './webhooks/webhook.controller';

@Module({
  imports: [GatewayModule, NatsClientModule],
  controllers: [WebhookController],
  providers: [EventProcessorService,TransformationService, NatsClientService],
})
export class AppModule {}
