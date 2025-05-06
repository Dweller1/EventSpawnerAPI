// src/dtos/fb.dto.ts
import { z } from "zod";

// Reusable enums and types - aligned with Prisma schema
const FunnelStageEnum = z.enum(["top", "bottom"]);
const FacebookSource = z.literal("facebook");
const FacebookEventTypeEnum = z.enum([
  "ad_view",
  "page_like",  // Changed from "page-like" to match Prisma
  "comment",
  "video_view",
  "ad_click",
  "form_submission",
  "checkout_complete",
]);

export const FacebookUserLocation = z.object({
  country: z.string(),
  city: z.string(),
});

export const FacebookUser = z.object({
  userId: z.string(),
  name: z.string(),
  age: z.number(),
  gender: z.enum(["male", "female", "non_binary"]), // Changed to match Prisma
  location: FacebookUserLocation,
});

// Engagement schemas
const FacebookEngagementTop = z.object({
  actionTime: z.string(),
  referrer: z.enum(["newsfeed", "marketplace", "groups"]),
  videoId: z.string().nullable(),
});

const FacebookEngagementBottom = z.object({
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
  timestamp: z.string().datetime(),
  source: FacebookSource,
  funnelStage: FunnelStageEnum,
  eventType: FacebookEventTypeEnum,
  data: z.object({
    user: FacebookUser,
    engagement: z.union([FacebookEngagementTop, FacebookEngagementBottom]),
  }),
});

export type FacebookEvent = z.infer<typeof FacebookEventSchema>;