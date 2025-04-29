import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { catchError, firstValueFrom, timeout } from "rxjs"

@Injectable()
export class NatsClientService {
  constructor(@Inject('NATS_SERVICE') private readonly client: ClientProxy) {}

  // In NatsClientService
async publish(pattern: string, data: any) {
  try {
    await firstValueFrom(
      this.client.emit(pattern, data).pipe(
        timeout(5000), // Add timeout
        catchError(err => {
          throw new Error(`Publish to ${pattern} failed: ${err.message}`);
        })
      )
    );
  } catch (err) {
    // Use structured logging
    throw new Error(`NATS publish failed: ${err.message}`);
  }
}
}
