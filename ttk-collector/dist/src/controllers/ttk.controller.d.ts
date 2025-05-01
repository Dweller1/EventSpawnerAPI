import { ClientProxy } from "@nestjs/microservices";
import { TiktokEvent } from "src/dtos/ttk.dto";
import { TiktokService } from "src/services/ttk.service";
export declare class ttkMicroserviceController {
    private natsClient;
    private ttkService;
    constructor(natsClient: ClientProxy, ttkService: TiktokService);
    createEventDB(data: TiktokEvent): Promise<{
        userId: string;
        eventId: string;
        timestamp: Date;
        source: string;
        funnelStage: import(".prisma/client").$Enums.FunnelStage;
        eventType: string;
        id: string;
    }>;
}
