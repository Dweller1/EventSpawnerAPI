"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiktokEventSchema = exports.TiktokEngagement = exports.TiktokEngagementBottomSchema = exports.TiktokEngagementTopSchema = exports.TiktokUserSchema = exports.TiktokEventType = exports.TiktokBottomEventType = exports.TiktokTopEventType = exports.FunnelStage = void 0;
const zod_1 = require("zod");
exports.FunnelStage = zod_1.z.enum(["top", "bottom"]);
exports.TiktokTopEventType = zod_1.z.enum([
    "video.view",
    "like",
    "share",
    "comment"
]);
exports.TiktokBottomEventType = zod_1.z.enum([
    "profile.visit",
    "purchase",
    "follow"
]);
exports.TiktokEventType = zod_1.z.union([
    exports.TiktokTopEventType,
    exports.TiktokBottomEventType
]);
exports.TiktokUserSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    username: zod_1.z.string(),
    followers: zod_1.z.number(),
});
exports.TiktokEngagementTopSchema = zod_1.z.object({
    watchTime: zod_1.z.number(),
    percentageWatched: zod_1.z.number(),
    device: zod_1.z.enum(["Android", "iOS", "Desktop"]),
    country: zod_1.z.string(),
    videoId: zod_1.z.string(),
});
exports.TiktokEngagementBottomSchema = zod_1.z.object({
    actionTime: zod_1.z.string(),
    profileId: zod_1.z.string().nullable(),
    purchasedItem: zod_1.z.string().nullable(),
    purchaseAmount: zod_1.z.string().nullable(),
});
exports.TiktokEngagement = zod_1.z.union([exports.TiktokEngagementBottomSchema, exports.TiktokEngagementTopSchema]);
exports.TiktokEventSchema = zod_1.z.object({
    eventId: zod_1.z.string(),
    timestamp: zod_1.z.string(),
    source: zod_1.z.literal("tiktok"),
    funnelStage: exports.FunnelStage,
    eventType: exports.TiktokEventType,
    data: zod_1.z.object({
        user: exports.TiktokUserSchema,
        engagement: exports.TiktokEngagement,
    }),
});
//# sourceMappingURL=ttk.dto.js.map