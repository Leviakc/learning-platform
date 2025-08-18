import { For } from "solid-js";
import { QuizItem } from "./QuizItem";

interface Quiz {
  question: string;
  options: string[];
  answer: string;
  hint?: string;
}

interface Props {
  quiz?: Quiz[];
}

export const Quiz = (props: Props) => {
  return (
    <>
      <h2 class="mt-6 mb-4 text-xl font-semibold">Quick Quiz</h2>
      <div class="mb-3 flex flex-col gap-4 shadow-sm">
        <For each={props.quiz}>{(quiz) => <QuizItem quiz={quiz} />}</For>
      </div>
    </>
  );
};
