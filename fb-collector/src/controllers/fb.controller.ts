import { Controller, Inject, UsePipes } from "@nestjs/common";
import { ClientProxy, EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { FacebookEvent, FacebookEventSchema } from "src/dtos/fb.dto";
import { FbService } from "src/services/fb.service";
import { ZodValidationPipe } from "src/ZodPipe/validation.pipe";

@Controller()
export class fbMicroserviceController{
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy, private fbService: FbService){}
@MessagePattern('facebook.event')
@UsePipes(new ZodValidationPipe(FacebookEventSchema))
async createEventDB(@Payload() data:FacebookEvent){
    return this.fbService.saveEvent(data);
}
} 
