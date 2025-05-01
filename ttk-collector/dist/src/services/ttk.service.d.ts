import { PrismaService } from './../../prisma/prisma.service';
import { TiktokEvent } from './../dtos/ttk.dto';
export declare class TiktokService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    saveEvent(data: TiktokEvent): Promise<{
        userId: string;
        eventId: string;
        timestamp: Date;
        source: string;
        funnelStage: import(".prisma/client").$Enums.FunnelStage;
        eventType: string;
        id: string;
    }>;
}
