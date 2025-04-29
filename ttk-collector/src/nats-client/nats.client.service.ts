import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs"

@Injectable()
export class NatsClientService {
  constructor(@Inject('NATS_SERVICE') private readonly client: ClientProxy) {}

  async publish(pattern: string, data: any) {
    return firstValueFrom(this.client.emit(pattern, data));
  }
}
