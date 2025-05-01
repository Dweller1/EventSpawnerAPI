"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TiktokService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiktokService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./../../prisma/prisma.service");
const database_error_1 = require("../errors/database.error");
let TiktokService = TiktokService_1 = class TiktokService {
    prisma;
    logger = new common_1.Logger(TiktokService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async saveEvent(data) {
        this.logger.debug(`Processing TikTok event: ${data.eventId}`);
        try {
            const existing = await this.prisma.tiktokEvent.findUnique({
                where: { eventId: data.eventId }
            });
            if (existing) {
                this.logger.warn(`Duplicate event detected: ${data.eventId}`);
                return existing;
            }
            const engagementData = 'watchTime' in data.data.engagement
                ? {
                    watchTime: data.data.engagement.watchTime,
                    percentageWatched: data.data.engagement.percentageWatched,
                    device: data.data.engagement.device,
                    country: data.data.engagement.country,
                    videoId: data.data.engagement.videoId,
                }
                : {
                    actionTime: data.data.engagement.actionTime,
                    profileId: data.data.engagement.profileId,
                    purchasedItem: data.data.engagement.purchasedItem,
                    purchaseAmount: data.data.engagement.purchaseAmount,
                };
            return await this.prisma.tiktokEvent.create({
                data: {
                    eventId: data.eventId,
                    timestamp: new Date(data.timestamp),
                    source: data.source,
                    funnelStage: data.funnelStage,
                    eventType: data.eventType,
                    user: {
                        create: {
                            userId: data.data.user.userId,
                            username: data.data.user.username,
                            followers: data.data.user.followers,
                        },
                    },
                    engagement: {
                        create: engagementData,
                    },
                },
            });
        }
        catch (error) {
            this.logger.error(`Database operation failed for event ${data.eventId}`, {
                error: error.message,
                stack: error.stack,
                eventData: {
                    id: data.eventId,
                    type: data.eventType
                }
            });
            throw new database_error_1.DatabaseError('Failed to save TikTok event', {
                eventId: data.eventId,
                eventType: data.eventType
            }, error);
        }
    }
};
exports.TiktokService = TiktokService;
exports.TiktokService = TiktokService = TiktokService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TiktokService);
//# sourceMappingURL=ttk.service.js.map