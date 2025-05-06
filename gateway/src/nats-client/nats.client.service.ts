import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Injectable()
export class NatsClientService implements OnModuleInit {
  constructor(@Inject('NATS_SERVICE') private readonly client: ClientProxy) {}

  async onModuleInit() {
    await this.client.connect();
  }

  async publish(pattern: string, data: any) {
    try {
      await firstValueFrom(this.client.emit(pattern, data));
    } catch (err) {
      console.error('NATS publish error:', err);
      throw err;
    }
  }

  // Add for request-response pattern if needed
  async send<T>(pattern: string, data: any): Promise<T> {
    return firstValueFrom(this.client.send<T>(pattern, data));
  }
}
