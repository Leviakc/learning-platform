import { z } from "astro:schema";
import type { lessonSchema } from "@/content/config";

export type Lesson = z.infer<typeof lessonSchema>;
