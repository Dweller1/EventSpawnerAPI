import { Controller, Inject, UsePipes } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { FacebookEvent, FacebookEventSchema } from "../dtos/fb.dto";
import { MetricsService } from "../metrics/metrics.service";
import { FbService } from "../services/fb.service";
import { ZodValidationPipe } from "../ZodPipe/validation.pipe";

@Controller()
export class fbMicroserviceController {
  constructor(
    @Inject("NATS_SERVICE") private readonly natsClient: ClientProxy,
    private readonly fbService: FbService,
    private readonly metrics: MetricsService
  ) {}

  @EventPattern("facebook.event")
  @UsePipes(new ZodValidationPipe(FacebookEventSchema))
  async createEventDB(@Payload() data: FacebookEvent) {
    // accepted events
    this.metrics.acceptedEvents.inc({
      event_type: data.eventType,
    });

    const timer = this.metrics.processingTime.startTimer({
      event_type: data.eventType,
    });

    try {
      const result = await this.fbService.saveEvent(data);

      // processed events
      this.metrics.processedEvents.inc({
        event_type: data.eventType,
      });

      return result;
    } catch (error) {
      //failed events
      this.metrics.failedEvents.inc({
        event_type: data.eventType,
        error_code: error.code || "unknown",
      });
      throw error;
    } finally {
      timer();
    }
  }
}
// import { Controller, Inject, UsePipes } from "@nestjs/common";
// import {
//   ClientProxy,
//   EventPattern,
//   MessagePattern,
//   Payload,
// } from "@nestjs/microservices";
// import { FacebookEvent, FacebookEventSchema } from "src/dtos/fb.dto";
// import { MetricsService } from "src/metrics/metrics.service";
// import { FbService } from "src/services/fb.service";
// import { ZodValidationPipe } from "src/ZodPipe/validation.pipe";

// @Controller()
// export class fbMicroserviceController {
//   constructor(
//     @Inject("NATS_SERVICE") private natsClient: ClientProxy,
//     private fbService: FbService, private metrics: MetricsService // Inject metrics service

//   ) {}
//   @EventPattern("facebook.event")
//   @UsePipes(new ZodValidationPipe(FacebookEventSchema))
//   async createEventDB(@Payload() data: FacebookEvent) {
//     return this.fbService.saveEvent(data);
//   }
// }

// src/controllers/fb.controller.ts
