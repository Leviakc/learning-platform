import { z } from "astro:schema";
import type { exerciseSchema } from "@/content/config";

export type Exercise = z.infer<typeof exerciseSchema>;
