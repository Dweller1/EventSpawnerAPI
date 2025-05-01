import { OnModuleInit } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
export declare class NatsClientService implements OnModuleInit {
    private readonly client;
    constructor(client: ClientProxy);
    onModuleInit(): Promise<void>;
    publish(pattern: string, data: any): Promise<void>;
    send<T>(pattern: string, data: any): Promise<T>;
}
