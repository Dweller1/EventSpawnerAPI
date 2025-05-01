import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { NatsClientService } from "./nats.client.service";

@Module({
    imports:[
         ClientsModule.register([{
            name: 'NATS_SERVICE',
            transport: Transport.NATS,
            options: {
              servers:['nats://nats'],
              reconnect: true,
              maxReconnectAttempts: -1,
            }
          }])
    ],
    providers:[NatsClientService],
    exports: [
      ClientsModule, // Critical - exports the configured clients
      NatsClientService
    ]
})
export class NatsClientModule {}