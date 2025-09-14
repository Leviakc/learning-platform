import { getCollection } from "astro:content";
import type { Lesson } from "@/types/lesson";
import type { CollectionEntry } from "astro:content";

type LessonEntry = CollectionEntry<"python"> & {
  data: Lesson;
};

export const getOrderedPythonLessons = async (lang: string) => {
  const allPythonEntries = (await getCollection(
    "python",
    (entry) => entry.data.type === "lesson" && entry.id.startsWith(lang),
  )) as LessonEntry[];

  return allPythonEntries.sort((a, b) => {
    return a.data.order - b.data.order;
  });
};
