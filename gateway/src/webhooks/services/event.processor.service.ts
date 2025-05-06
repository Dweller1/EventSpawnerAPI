// event-processor.service.ts
import { Injectable } from '@nestjs/common';
import { NatsClientService } from './../../nats-client/nats.client.service'; // Adjust the import based on your project structure
import { TransformationService } from './transformation.service';
import { topicMap } from './../../nats-client/topicMap';


const reporterEligibleEventTypes = ['facebook.event', 'tiktok.event'] as const;
type ReporterEligibleEventType = typeof reporterEligibleEventTypes[number];

@Injectable()
export class EventProcessorService {
  constructor(
    private readonly natsClientService: NatsClientService,
    private readonly transformationService: TransformationService,
  ) {}
  
  async processEvent(eventType: string, eventData: any) {
    if (!eventType || !topicMap[eventType]) {
      throw new Error('Invalid eventType provided');
    }
    
    const topics = topicMap[eventType];
    
    const publishResults = await Promise.allSettled(
      topics.map(t => {
        const transformedData = this.transformationService.transformForTopic(eventData, t);
        return this.natsClientService.publish(t, transformedData);
      }),
    );
    
    // Publish to reporter if the eventType is eligible
    if (this.isReporterEligible(eventType)) {
      const transformedForReporter = this.transformationService.transformForReporter(eventData);
      await this.natsClientService.publish('reporter.event', transformedForReporter);
    }
    
    return publishResults;
  }
  
  private isReporterEligible(eventType: string): eventType is ReporterEligibleEventType {
    return reporterEligibleEventTypes.includes(eventType as ReporterEligibleEventType);
  }
}
// @Injectable()
// export class EventProcessorService {
//   constructor(
//     private readonly natsClientService: NatsClientService,
//     private readonly transformationService: TransformationService,
//   ) {}

//   async processEvent(eventType: string, eventData: any) {
//     if (!eventType || !topicMap[eventType]) {
//       throw new Error('Invalid eventType provided');
//     }

//     const topics = topicMap[eventType];

//     // Use Promise.allSettled to handle multiple topic publishes in parallel
//     const publishResults = await Promise.allSettled(
//       topics.map(t => {
//         const transformedData = this.transformationService.transformForTopic(eventData, t);
//         return this.natsClientService.publish(t, transformedData);
//       }),
//     );

//     return publishResults;
//   }
// }
///
// @Injectable()
// export class EventProcessorService {
//   constructor(
//     private readonly natsClientService: NatsClientService,
//     private readonly transformationService: TransformationService,
//   ) {}

//   async processEvent(eventType: string, eventData: any) {
//     if (!eventType || !topicMap[eventType]) {
//       throw new Error('Invalid eventType provided');
//     }

//     const topics = topicMap[eventType];

//     const publishResults = await Promise.allSettled(
//       topics.map(t => {
//         const transformedData = this.transformationService.transformForTopic(eventData, t);
//         return this.natsClientService.publish(t, transformedData);
//       }),
//     );

//     // Corrected reporter logic
//     if (eventType === 'facebook.event' || eventType === 'tiktok.event') {
//       const transformedForReporter = this.transformationService.transformForReporter(eventData);
//       await this.natsClientService.publish('reporter.event', transformedForReporter);
//     }

//     return publishResults;
//   }
// }
