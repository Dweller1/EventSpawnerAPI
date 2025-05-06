import { Module } from "@nestjs/common";
import { NatsClientModule } from "./nats-client/nats.client.module";
import { fbMicroserviceController } from "./controllers/fb.controller";
import { FbService } from "./services/fb.service";
import { PrismaModule } from "prisma/prisma.module";
import { NatsClientService } from "./nats-client/nats.client.service";
import { MetricsModule } from "./metrics/metrics.module";

@Module({
  imports: [NatsClientModule, PrismaModule, MetricsModule],
  controllers: [fbMicroserviceController],
  providers: [FbService, NatsClientService],
})
export class AppModule {}
