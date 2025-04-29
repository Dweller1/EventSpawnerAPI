import { ClientProxy } from "@nestjs/microservices";
import { TiktokEvent } from "src/dtos/ttk.dto";
import { TiktokService } from "src/services/ttk.service";
export declare class ttkMicroserviceController {
    private natsClient;
    private ttkService;
    constructor(natsClient: ClientProxy, ttkService: TiktokService);
    createEventDB(data: TiktokEvent): Promise<any>;
}
