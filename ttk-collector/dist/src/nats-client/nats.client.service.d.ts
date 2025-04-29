import { ClientProxy } from "@nestjs/microservices";
export declare class NatsClientService {
    private readonly client;
    constructor(client: ClientProxy);
    publish(pattern: string, data: any): Promise<any>;
}
