import { z } from 'zod';

// Define a Zod schema for the query parameters (with optional fields)
export const GetEventReportDto = z.object({
  from: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: 'Invalid from date format. Must be a valid ISO 8601 string.',
    }),
  to: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: 'Invalid to date format. Must be a valid ISO 8601 string.',
    }),
  source: z.enum(['facebook', 'tiktok']).optional(),
  funnelStage: z.enum(['top', 'bottom']).optional(),
  eventType: z.string().optional(),
});

// Type inference for the DTO
export type GetEventReportDto = z.infer<typeof GetEventReportDto>;
