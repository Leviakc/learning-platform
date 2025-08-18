import { createSignal, For } from "solid-js";

interface Quiz {
  question: string;
  options: string[];
  answer: string;
  hint?: string;
}

interface Props {
  quiz: Quiz;
}

type QuizStatus = "idle" | "correct" | "incorrect";

export const QuizItem = (props: Props) => {
  const [selectedOption, setSelectedOption] = createSignal<string | null>(null);
  const [quizStatus, setQuizStatus] = createSignal<QuizStatus>("idle");
  const [quizAttempts, setQuizAttempts] = createSignal(0);
  const [showQuizAnswer, setShowQuizAnswer] = createSignal(false);

  const handleCheckQuiz = () => {
    if (selectedOption() === null) {
      return; // Do nothing if no option is selected
    }

    setShowQuizAnswer(false);
    const isCorrect = selectedOption() === props.quiz.answer;

    if (isCorrect) {
      setQuizStatus("correct");
      setQuizAttempts(0);
    } else {
      setQuizStatus("incorrect");
      setQuizAttempts((prev) => prev + 1);
    }
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    if (quizStatus() !== "idle") {
      setQuizStatus("idle");
    }
  };

  const handleShowAnswer = () => {
    setShowQuizAnswer(true);
  };

  return (
    <div class="bg-card text-card-foreground rounded-lg border text-pretty shadow-sm">
      <div class="space-y-4 p-4">
        <p class="font-mono text-sm">{props.quiz.question}</p>

        {/* Radio Group Options */}
        <div
          class={`space-y-2 ${quizStatus() === "incorrect" ? "[&_label]:text-red-500" : ""}`}
        >
          <For each={props.quiz.options}>
            {(option, index) => (
              <div class="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handleOptionChange(option)}
                  class="hover:bg-accent flex h-4 w-4 items-center justify-center rounded-full transition-colors"
                  id={`option-${index()}`}
                >
                  {/* Circle Icon - filled when selected */}
                  <svg
                    class="currentColor h-4 w-4 cursor-pointer"
                    fill={
                      selectedOption() === option
                        ? "hsl(var(--primary))"
                        : "none"
                    }
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke-width="2"
                      class={
                        selectedOption() === option
                          ? "text-ring"
                          : "text-current"
                      }
                    />
                  </svg>
                </button>
                <label
                  for={`option-${index()}`}
                  class="flex-1 cursor-pointer text-sm font-normal"
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </label>
              </div>
            )}
          </For>
        </div>

        <div class="flex flex-col items-start gap-2">
          <button
            class="ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
            onClick={handleCheckQuiz}
            disabled={selectedOption() === null || quizStatus() === "correct"}
          >
            Check
          </button>

          {/* Incorrect Answer Feedback */}
          {quizStatus() === "incorrect" && (
            <div class="space-y-2">
              <p class="flex items-center gap-1.5 text-sm text-red-500">
                {/* X Circle Icon */}
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Keep trying! Check the hint if you're stuck.
              </p>
              {quizAttempts() >= 2 && (
                <button
                  class="text-primary flex h-auto items-center p-0 text-xs underline-offset-4 hover:underline"
                  onClick={handleShowAnswer}
                >
                  {/* Eye Icon */}
                  <svg
                    class="mr-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  See answer
                </button>
              )}
            </div>
          )}

          {/* Show Answer Alert */}
          {showQuizAnswer() && (
            <div class="bg-background w-full rounded-lg border p-4">
              <h5 class="mb-1 leading-none font-medium tracking-tight">
                Correct Answer
              </h5>
              <div class="text-muted-foreground text-sm">
                <p class="font-mono">{props.quiz.answer}</p>
              </div>
            </div>
          )}

          {/* Correct Answer Feedback */}
          {quizStatus() === "correct" && (
            <p class="flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400">
              {/* Check Circle Icon */}
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Correct! Well done.
            </p>
          )}

          {/* Hint */}
          {props.quiz.hint && !showQuizAnswer() && (
            <p class="text-muted-foreground flex items-center gap-1.5 pt-1 text-xs">
              {/* Lightbulb Icon */}
              <svg
                class="h-7 w-7 md:h-6 md:w-6"
                fill="hsl(var(--primary))"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
              Hint: {props.quiz.hint}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
