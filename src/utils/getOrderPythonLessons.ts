import { getCollection } from "astro:content";
import type { Lesson } from "@/types/lesson";
import type { CollectionEntry } from "astro:content";
type LessonEntry = CollectionEntry<"python"> & {
  data: Lesson;
};

const allPythonEntries = (await getCollection(
  "python",
  (entry) => entry.data.type === "lesson",
)) as LessonEntry[];

export const orderedPythonLessons = allPythonEntries.sort((a, b) => {
  return a.data.order - b.data.order;
});
