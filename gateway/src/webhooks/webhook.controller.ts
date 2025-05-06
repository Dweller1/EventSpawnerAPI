import {
  Controller,
  Post,
  Req,
  Res,
  HttpException,
  HttpStatus,
  UsePipes,
  Body,
  BadRequestException,
} from "@nestjs/common";
import { Request, Response } from "express";
import { EventProcessorService } from "./../webhooks/services/event.processor.service"; // Adjust the import based on your project structure
import { ZodValidationPipe } from "./ZodPipe/validation.pipe"; // Custom validation pipe, adjust accordingly
import { FacebookEventSchema } from "./dtos/facebookDTO"; // Adjust the import based on your project structure
import { TiktokEventSchema } from "./dtos/tiktokDTO"; // Adjust the import based on your project structure
import { MetricsService } from "src/metrics/metrics.service";

@Controller("webhook")
export class WebhookController {
  constructor(
    private readonly eventProcessorService: EventProcessorService,
    private readonly metrics: MetricsService
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe([FacebookEventSchema, TiktokEventSchema]))
  async handleEvent(@Body() body: unknown) {
    this.metrics.acceptedEvents.inc();
    // Use @Body() instead of @Req()
    const result = FacebookEventSchema.or(TiktokEventSchema).safeParse(body);
    if (!result.success) {
      this.metrics.failedEvents.inc();
      throw new BadRequestException(result.error);
    }

    try {
      const { eventType, ...eventData } = result.data;
      await this.eventProcessorService.processEvent(eventType, eventData);

      // 3. Track processed event
      this.metrics.processedEvents.inc();
      return { status: "received" };
    } catch (error) {
      this.metrics.failedEvents.inc();
      throw error;
    }
  }
}

// @Controller('webhook')
// export class WebhookController {
//   constructor(private readonly eventProcessorService: EventProcessorService) {}

//   @Post()
//   @UsePipes(
//     new ZodValidationPipe([FacebookEventSchema, TiktokEventSchema]) // Validate both schemas dynamically
//   )
//   async handleEvent(@Req() req: Request, @Res() res: Response) {
//     const { eventType, ...eventData } = req.body;

//     try {
//       // Ensure eventType is present and valid
//       if (!eventType || !['facebook.event', 'tiktok.event'].includes(eventType)) {
//         throw new HttpException('Invalid eventType provided', HttpStatus.BAD_REQUEST);
//       }

//       // Process the event data (Facebook or Tiktok)
//       const publishResults = await this.eventProcessorService.processEvent(eventType, eventData);

//       // Check for any failed publish attempts and handle them accordingly
//       const failedResults = publishResults.filter(result => result.status === 'rejected');
//       if (failedResults.length > 0) {
//         throw new HttpException('Some publish operations failed', HttpStatus.INTERNAL_SERVER_ERROR);
//       }

//       // If the event type is either Facebook or Tiktok, ensure we also publish to the reporter
//       if (eventType === 'facebook.event' || eventType === 'tiktok.event') {
//         // Transform and publish to the reporter topic
//         const transformedData = this.eventProcessorService.transformationService.transformForReporter(eventData);
//         await this.eventProcessorService.natsClientService.publish('reporter.event', transformedData);
//       }

//       // Respond back with success status
//       res.status(200).send({ status: 'received' });

//     } catch (error) {
//       console.error('Failed to process event', error);
//       throw new HttpException('Failed to process event', HttpStatus.BAD_REQUEST);
//     }
//   }
// }
// // webhook.controller.ts
// import { Controller, Post, Req, Res, HttpException, HttpStatus, UsePipes } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { EventProcessorService } from './../webhooks/services/event.processor.service'; // Adjust the import based on your project structure
// import { ZodValidationPipe } from './ZodPipe/validation.pipe'; // Custom validation pipe, adjust accordingly
// import { FacebookEventSchema } from './dtos/facebookDTO'; // Adjust the import based on your project structure
// import { TiktokEventSchema } from './dtos/tiktokDTO'; // Adjust the import based on your project structure

// @Controller('webhook')
// export class WebhookController {
//   constructor(private readonly eventProcessorService: EventProcessorService) {}

//   @Post()
//   @UsePipes(new ZodValidationPipe(FacebookEventSchema)) // Or TiktokEventSchema dynamically, depending on eventType
//   async handleEvent(@Req() req: Request, @Res() res: Response) {
//     const { eventType, ...eventData } = req.body;

//     try {
//       // Process event data for Facebook or Tiktok
//       const publishResults = await this.eventProcessorService.processEvent(eventType, eventData);

//       // Check for any failed publish attempts and handle them accordingly
//       const failedResults = publishResults.filter(result => result.status === 'rejected');
//       if (failedResults.length > 0) {
//         throw new HttpException('Some publish operations failed', HttpStatus.INTERNAL_SERVER_ERROR);
//       }

//       res.status(200).send({ status: 'received' });
//     } catch (error) {
//       console.error('Failed to process event', error);
//       throw new HttpException('Failed to process event', HttpStatus.BAD_REQUEST);
//     }
//   }
// }
