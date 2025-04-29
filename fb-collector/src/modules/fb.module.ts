import { Module } from "@nestjs/common";
import { PrismaModule } from "prisma/prisma.module";
import { fbMicroserviceController } from "src/controllers/fb.controller";
import { NatsClientModule } from "src/nats-client/nats.client.module";
import { NatsClientService } from "src/nats-client/nats.client.service";
import { FbService } from "src/services/fb.service";

@Module({
    imports:[NatsClientModule, PrismaModule],
    controllers:[fbMicroserviceController],
    providers:[NatsClientService, FbService],
})
export class fbModule {}