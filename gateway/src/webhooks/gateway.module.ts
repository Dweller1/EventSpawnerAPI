import { Module } from "@nestjs/common";
import { WebhookController } from "./webhook.controller";
import { NatsClientModule } from "src/nats-client/nats-client.module";
import { EventProcessorService } from "./services/event.processor.service";
import { TransformationService } from "./services/transformation.service";
import { NatsClientService } from "src/nats-client/nats.client.service";

@Module({
    imports:[NatsClientModule],
    controllers:[WebhookController],
    providers:[EventProcessorService,TransformationService, NatsClientService]
})  
export class GatewayModule{}