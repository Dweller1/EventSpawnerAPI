import { Module } from "@nestjs/common";
import { Prisma } from "generated/prisma";
import { PrismaModule } from "prisma/prisma.module";
import { ttkMicroserviceController } from "src/controllers/ttk.controller";
import { NatsClientModule } from "src/nats-client/nats.client.module";
import { NatsClientService } from "src/nats-client/nats.client.service";
import { TiktokService } from "src/services/ttk.service";

@Module({
    imports:[NatsClientModule, PrismaModule],
    controllers:[ttkMicroserviceController],
    providers:[NatsClientService, TiktokService],
})
export class ttkModule {}