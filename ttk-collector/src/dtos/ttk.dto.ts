import { z } from "zod";

// 🔥 Funnel Stage (separate)
export const FunnelStage = z.enum(["top", "bottom"]);

// 🔥 Top and Bottom event types separated
export const TiktokTopEventType = z.enum([
  "video.view",
  "like",
  "share",
  "comment"
]);

export const TiktokBottomEventType = z.enum([
  "profile.visit",
  "purchase",
  "follow"
]);

export const TiktokEventType = z.union([
  TiktokTopEventType,
  TiktokBottomEventType
]);

// 🔥 User schema
export const TiktokUserSchema = z.object({
  userId: z.string(),
  username: z.string(),
  followers: z.number(),
});

// 🔥 Engagement schemas separated
export const TiktokEngagementTopSchema = z.object({
  watchTime: z.number(),
  percentageWatched: z.number(),
  device: z.enum(["Android", "iOS", "Desktop"]),
  country: z.string(),
  videoId: z.string(),
});

export const TiktokEngagementBottomSchema = z.object({
  actionTime: z.string(),
  profileId: z.string().nullable(),
  purchasedItem: z.string().nullable(),
  purchaseAmount: z.string().nullable(),
});

export const TiktokEngagement = z.union([TiktokEngagementBottomSchema, TiktokEngagementTopSchema])

// 🔥 Full Tiktok Event Schema (funnelStage now separate)
export const TiktokEventSchema = z.object({
  eventId: z.string(),
  timestamp: z.string(),
  source: z.literal("tiktok"),
  funnelStage: FunnelStage, // Separate funnelStage
  eventType: TiktokEventType,
  data: z.object({
    user: TiktokUserSchema,
    engagement: TiktokEngagement,
  }),
});

// 🔥 Types (if needed)
export type TiktokEvent = z.infer<typeof TiktokEventSchema>;
