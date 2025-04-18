import { defineCollection, z } from "astro:content";

const faqsCollection = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  faqs: faqsCollection,
};
