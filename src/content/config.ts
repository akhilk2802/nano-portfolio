import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const resume = defineCollection({
  type: "content",
  schema: z.object({
    section_name: z.string().optional(),
    priority: z.number(),
    education: z.boolean().optional(),
    eStartDate: z.string().optional(),
    eEndDate: z.string().optional(),
    eInstitution: z.string().optional(),
    eDegree: z.string().optional(),
    eLocation: z.string().optional(),
    subHeading: z.string().optional(),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

export const collections = { blog, work, projects, resume };
