import { z } from "zod";

// Reusable enums and types
const FunnelStageEnum = z.enum(["top", "bottom"]);
const FacebookSource = z.literal("facebook");
const TiktokSource = z.literal("tiktok");

// Common User schema for both platforms
const CommonUserSchema = z.object({
  userId: z.string(),
  name: z.string().optional(),
  username: z.string().optional(),
  age: z.number().optional(),
  gender: z.enum(["male", "female", "non-binary"]).optional(),
  followers: z.number().optional(),
  location: z.object({
    country: z.string(),
    city: z.string().optional(),
  }).optional(),
});

// Facebook event types
const FacebookEventTypeEnum = z.enum([
  "ad.view",
  "page.like",
  "comment",
  "video.view",
  "ad.click",
  "form.submission",
  "checkout.complete",
]);

// TikTok event types
const TiktokTopEventType = z.enum([
  "video.view",
  "like",
  "share",
  "comment",
]);

const TiktokBottomEventType = z.enum([
  "profile.visit",
  "purchase",
  "follow",
]);

const TiktokEventType = z.union([TiktokTopEventType, TiktokBottomEventType]);

// Common engagement schemas for both platforms
const CommonEngagementTopSchema = z.object({
  actionTime: z.string(),
  referrer: z.enum(["newsfeed", "marketplace", "groups"]).optional(),
  videoId: z.string().nullable(),
});

const CommonEngagementBottomSchema = z.object({
  adId: z.string().optional(),
  campaignId: z.string().optional(),
  clickPosition: z.enum(["top_left", "bottom_right", "center"]).optional(),
  device: z.enum(["mobile", "desktop"]).optional(),
  browser: z.enum(["Chrome", "Firefox", "Safari"]).optional(),
  purchaseAmount: z.string().nullable(),
  watchTime: z.number().optional(),
  percentageWatched: z.number().optional(),
});

// Facebook Event Schema
const FacebookEventSchema = z.object({
  eventId: z.string(),
  timestamp: z.string(),
  source: FacebookSource,
  funnelStage: FunnelStageEnum,
  eventType: FacebookEventTypeEnum,
  data: z.object({
    user: CommonUserSchema,
    engagement: z.union([CommonEngagementTopSchema, CommonEngagementBottomSchema]),
  }),
});

// TikTok Event Schema
const TiktokEventSchema = z.object({
  eventId: z.string(),
  timestamp: z.string(),
  source: TiktokSource,
  funnelStage: FunnelStageEnum,
  eventType: TiktokEventType,
  data: z.object({
    user: CommonUserSchema,
    engagement: z.union([CommonEngagementTopSchema, CommonEngagementBottomSchema]),
  }),
});

// Union of both Facebook and TikTok events
export const EventSchema = z.union([FacebookEventSchema, TiktokEventSchema]);

// Event Type
export type Event = z.infer<typeof EventSchema>;
