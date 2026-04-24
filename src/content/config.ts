import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    type: z.enum(["conference", "workshop", "hackathon", "summer-school", "expert-meeting", "webinar"]),
    featured: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().optional(),
    type: z.enum(["meeting-notes", "announcement", "update"]).default("update"),
    featured: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    domain: z.string(),
    author: z.string().optional(),
    year: z.number().optional(),
    url: z.string().url().optional(),
    type: z.enum(["paper", "book", "dataset", "software", "tutorial", "other"]).default("paper"),
  }),
});

export const collections = { events, news, resources };
