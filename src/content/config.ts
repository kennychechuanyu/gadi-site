import { defineCollection, z } from "astro:content";

const speaker = z.object({
  name: z.string(),
  institution: z.string(),
  photo: z.string().optional(),
  photoCredit: z.string().optional(),
  bio: z.string().optional(),
  website: z.string().url().optional(),
  reading: z
    .object({
      citation: z.string(),
      url: z.string().url().optional(),
    })
    .optional(),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    deck: z.string().optional(),
    date: z.date(),
    endDate: z.date().optional(),
    time: z.string().optional(),
    timezone: z.string().default("Europe/Brussels"),
    provisional: z.boolean().default(false),
    location: z.string(),
    type: z.enum(["conference", "workshop", "hackathon", "summer-school", "expert-meeting", "webinar", "symposium"]),
    featured: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),
    registrationNote: z.string().optional(),
    ogImage: z.string().optional(),
    format: z.string().optional(),
    about: z.array(z.string()).optional(),
    questionsIntro: z.string().optional(),
    questions: z
      .array(
        z.object({
          label: z.string(),
          text: z.string(),
        })
      )
      .optional(),
    speakers: z.array(speaker).optional(),
    programme: z
      .array(
        z.object({
          time: z.string(),
          kind: z.enum(["welcome", "talk", "break", "discussion", "closing"]),
          title: z.string().optional(),
          field: z.string().optional(),
          short: z.string().optional(),
          text: z.string().optional(),
          speaker: z.string().optional(),
          with: z.string().optional(),
        })
      )
      .optional(),
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
