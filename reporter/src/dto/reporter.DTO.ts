import { z } from "zod";

// Reusable enums and types
const FunnelStageEnum = z.enum(["top", "bottom"]);
const FacebookSource = z.literal("facebook");
const FacebookEventTypeEnum = z.enum([
  "ad.view",
  "page.like",
  "comment",
  "video.view",
  "ad.click",
  "form.submission",
  "checkout.complete",
]);

export const FacebookUserLocation = z.object({
  country: z.string(),
  city: z.string(),
});

export const FacebookUser = z.object({
  userId: z.string(),
  name: z.string(),
  age: z.number(),
  gender: z.enum(["male", "female", "non-binary"]),
  location: FacebookUserLocation,
});

// Engagement schemas
export const FacebookEngagementTop = z.object({
  actionTime: z.string(),
  referrer: z.enum(["newsfeed", "marketplace", "groups"]),
  videoId: z.string().nullable(),
});

export const FacebookEngagementBottom = z.object({
  adId: z.string(),
  campaignId: z.string(),
  clickPosition: z.enum(["top_left", "bottom_right", "center"]),
  device: z.enum(["mobile", "desktop"]),
  browser: z.enum(["Chrome", "Firefox", "Safari"]),
  purchaseAmount: z.string().nullable(),
});

// Full event schema
export const FacebookEventSchema = z.object({
  eventId: z.string(),
  timestamp: z.string(),
  source: FacebookSource,
  funnelStage: FunnelStageEnum,
  eventType: FacebookEventTypeEnum,
  data: z.object({
    user: FacebookUser,
    engagement: z.union([FacebookEngagementTop, FacebookEngagementBottom]),
  }),
});


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
export const ReporterType = z.union([TiktokEventSchema, FacebookEventSchema])

// 🔥 Types (if needed)
export type ReportDTO = z.infer<typeof ReporterType>;
