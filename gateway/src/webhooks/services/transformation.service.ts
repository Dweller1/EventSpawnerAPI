// transformation.service.ts
import { Injectable } from '@nestjs/common';
import { FacebookEvent } from './../dtos/facebookDTO';
import { TiktokEvent } from './../dtos/tiktokDTO';

@Injectable()
export class TransformationService {
  transformForReporter(eventData: FacebookEvent | TiktokEvent) {
    // Transform data specifically for the reporter event
    return eventData    
  }
  
  transformForTopic(eventData: FacebookEvent | TiktokEvent, topic: string) {
    switch (topic) {
      case 'facebook.event':
        return eventData
        case 'tiktok.event':
          return eventData
          case 'reporter.event':
            // Apply any transformations specific to the reporter event
            return this.transformForReporter(eventData);
            default:
              return eventData; // Return original event data if no specific transformation
            }
          }
        }
        
        
        // @Injectable()
        // export class TransformationService {
        //   transformForReporter(eventData: FacebookEvent | TiktokEvent) {
        //     // Transform data specifically for the reporter event
        //     return { ...eventData, additionalField: 'reporter-specific' };
        //   }
        
        //   transformForTopic(eventData: FacebookEvent | TiktokEvent, topic: string) {
        //     switch (topic) {
        //       case 'facebook.collector.event':
        //         return { ...eventData, fbSpecificField: 'value' };
        //       case 'tiktok.collector.event':
        //         return { ...eventData, tiktokSpecificField: 'value' };
        //       default:
        //         return eventData; // Return original event data if no specific transformation
        //     }
        //   }
        // }