import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const exerciseSchema = z.object({
  type: z.literal("exercise"),
  title: z.string().optional(),
  tests: z.array(z.any()), // We'll define the test structure later
});

export const lessonSchema = z.object({
  type: z.literal("lesson"),
  title: z.string(),
  order: z.number(),
  description: z.string(),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  quiz: z
    .array(
      z.object({
        question: z.string(),
        options: z.array(z.string()),
        answer: z.string(),
        hint: z.string().optional(),
      }),
    )
    .optional(),
  // This links to the corresponding exercise
  // exerciseSlug: z.string(),
});

const createCollections = (language: "python" | "sql") => {
  const collection = defineCollection({
    loader: glob({
      pattern: "**/{lesson,exercise}.md",
      base: `./src/content/${language}/`,
    }),
    schema: z.union([
      lessonSchema.extend({
        // language: z.literal(language),
      }),
      exerciseSchema.extend({
        // language: z.literal(language),
      }),
    ]),
  });

  return { collection };
};

const { collection: pythonCollection } = createCollections("python");
const { collection: sqlCollection } = createCollections("sql");

export const collections = {
  python: pythonCollection,
  sql: sqlCollection,
};
