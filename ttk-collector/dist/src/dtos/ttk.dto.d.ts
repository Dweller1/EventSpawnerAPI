import { z } from "zod";
export declare const FunnelStage: z.ZodEnum<["top", "bottom"]>;
export declare const TiktokTopEventType: z.ZodEnum<["video.view", "like", "share", "comment"]>;
export declare const TiktokBottomEventType: z.ZodEnum<["profile.visit", "purchase", "follow"]>;
export declare const TiktokEventType: z.ZodUnion<[z.ZodEnum<["video.view", "like", "share", "comment"]>, z.ZodEnum<["profile.visit", "purchase", "follow"]>]>;
export declare const TiktokUserSchema: z.ZodObject<{
    userId: z.ZodString;
    username: z.ZodString;
    followers: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    userId: string;
    username: string;
    followers: number;
}, {
    userId: string;
    username: string;
    followers: number;
}>;
export declare const TiktokEngagementTopSchema: z.ZodObject<{
    watchTime: z.ZodNumber;
    percentageWatched: z.ZodNumber;
    device: z.ZodEnum<["Android", "iOS", "Desktop"]>;
    country: z.ZodString;
    videoId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    watchTime: number;
    percentageWatched: number;
    device: "Android" | "iOS" | "Desktop";
    country: string;
    videoId: string;
}, {
    watchTime: number;
    percentageWatched: number;
    device: "Android" | "iOS" | "Desktop";
    country: string;
    videoId: string;
}>;
export declare const TiktokEngagementBottomSchema: z.ZodObject<{
    actionTime: z.ZodString;
    profileId: z.ZodNullable<z.ZodString>;
    purchasedItem: z.ZodNullable<z.ZodString>;
    purchaseAmount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    actionTime: string;
    profileId: string | null;
    purchasedItem: string | null;
    purchaseAmount: string | null;
}, {
    actionTime: string;
    profileId: string | null;
    purchasedItem: string | null;
    purchaseAmount: string | null;
}>;
export declare const TiktokEngagement: z.ZodUnion<[z.ZodObject<{
    actionTime: z.ZodString;
    profileId: z.ZodNullable<z.ZodString>;
    purchasedItem: z.ZodNullable<z.ZodString>;
    purchaseAmount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    actionTime: string;
    profileId: string | null;
    purchasedItem: string | null;
    purchaseAmount: string | null;
}, {
    actionTime: string;
    profileId: string | null;
    purchasedItem: string | null;
    purchaseAmount: string | null;
}>, z.ZodObject<{
    watchTime: z.ZodNumber;
    percentageWatched: z.ZodNumber;
    device: z.ZodEnum<["Android", "iOS", "Desktop"]>;
    country: z.ZodString;
    videoId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    watchTime: number;
    percentageWatched: number;
    device: "Android" | "iOS" | "Desktop";
    country: string;
    videoId: string;
}, {
    watchTime: number;
    percentageWatched: number;
    device: "Android" | "iOS" | "Desktop";
    country: string;
    videoId: string;
}>]>;
export declare const TiktokEventSchema: z.ZodObject<{
    eventId: z.ZodString;
    timestamp: z.ZodString;
    source: z.ZodLiteral<"tiktok">;
    funnelStage: z.ZodEnum<["top", "bottom"]>;
    eventType: z.ZodUnion<[z.ZodEnum<["video.view", "like", "share", "comment"]>, z.ZodEnum<["profile.visit", "purchase", "follow"]>]>;
    data: z.ZodObject<{
        user: z.ZodObject<{
            userId: z.ZodString;
            username: z.ZodString;
            followers: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            username: string;
            followers: number;
        }, {
            userId: string;
            username: string;
            followers: number;
        }>;
        engagement: z.ZodUnion<[z.ZodObject<{
            actionTime: z.ZodString;
            profileId: z.ZodNullable<z.ZodString>;
            purchasedItem: z.ZodNullable<z.ZodString>;
            purchaseAmount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            actionTime: string;
            profileId: string | null;
            purchasedItem: string | null;
            purchaseAmount: string | null;
        }, {
            actionTime: string;
            profileId: string | null;
            purchasedItem: string | null;
            purchaseAmount: string | null;
        }>, z.ZodObject<{
            watchTime: z.ZodNumber;
            percentageWatched: z.ZodNumber;
            device: z.ZodEnum<["Android", "iOS", "Desktop"]>;
            country: z.ZodString;
            videoId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            watchTime: number;
            percentageWatched: number;
            device: "Android" | "iOS" | "Desktop";
            country: string;
            videoId: string;
        }, {
            watchTime: number;
            percentageWatched: number;
            device: "Android" | "iOS" | "Desktop";
            country: string;
            videoId: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            watchTime: number;
            percentageWatched: number;
            device: "Android" | "iOS" | "Desktop";
            country: string;
            videoId: string;
        } | {
            actionTime: string;
            profileId: string | null;
            purchasedItem: string | null;
            purchaseAmount: string | null;
        };
    }, {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            watchTime: number;
            percentageWatched: number;
            device: "Android" | "iOS" | "Desktop";
            country: string;
            videoId: string;
        } | {
            actionTime: string;
            profileId: string | null;
            purchasedItem: string | null;
            purchaseAmount: string | null;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    eventId: string;
    timestamp: string;
    source: "tiktok";
    funnelStage: "top" | "bottom";
    eventType: "video.view" | "like" | "share" | "comment" | "profile.visit" | "purchase" | "follow";
    data: {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            watchTime: number;
            percentageWatched: number;
            device: "Android" | "iOS" | "Desktop";
            country: string;
            videoId: string;
        } | {
            actionTime: string;
            profileId: string | null;
            purchasedItem: string | null;
            purchaseAmount: string | null;
        };
    };
}, {
    eventId: string;
    timestamp: string;
    source: "tiktok";
    funnelStage: "top" | "bottom";
    eventType: "video.view" | "like" | "share" | "comment" | "profile.visit" | "purchase" | "follow";
    data: {
        user: {
            userId: string;
            username: string;
            followers: number;
        };
        engagement: {
            watchTime: number;
            percentageWatched: number;
            device: "Android" | "iOS" | "Desktop";
            country: string;
            videoId: string;
        } | {
            actionTime: string;
            profileId: string | null;
            purchasedItem: string | null;
            purchaseAmount: string | null;
        };
    };
}>;
export type TiktokEvent = z.infer<typeof TiktokEventSchema>;
