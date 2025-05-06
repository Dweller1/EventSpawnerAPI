import { Controller, Inject, UsePipes } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { TiktokEvent, TiktokEventSchema } from 'src/dtos/ttk.dto';
import { TiktokService } from 'src/services/ttk.service';
import { ZodValidationPipe } from 'src/ZodPipe/validation.pipe';

@Controller()
export class ttkMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
    private ttkService: TiktokService,
  ) {}
  @EventPattern('tiktok.event')
  @UsePipes(new ZodValidationPipe(TiktokEventSchema))
  async createEventDB(@Payload() data: TiktokEvent) {
    return this.ttkService.saveEvent(data);
  }
}
