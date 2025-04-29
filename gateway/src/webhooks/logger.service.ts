import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);

  logIncomingEvent(event: any) {
    this.logger.log(`📥 Received event: ${JSON.stringify(event, null, 2)}`);
  }
}