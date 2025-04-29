import { Logger } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { TiktokEvent } from './../dtos/ttk.dto';
export declare class TiktokService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService, logger: Logger);
    saveEvent(data: TiktokEvent): Promise<any>;
}
