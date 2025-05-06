import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { NatsClientModule } from "./nats-client/nats-client.module";
import { EventProcessorService } from "./webhooks/services/event.processor.service";
import { TransformationService } from "./webhooks/services/transformation.service";
import { NatsClientService } from "./nats-client/nats.client.service";
import { WebhookController } from "./webhooks/webhook.controller";
import { MetricsModule } from "./metrics/metrics.module";

@Module({
  imports: [NatsClientModule, MetricsModule],
  controllers: [WebhookController],
  providers: [EventProcessorService, TransformationService, NatsClientService],
})
export class AppModule {}
