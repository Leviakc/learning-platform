import { navigate } from "astro:transitions/client";

export const Tab = () => {
  const path = window.location.pathname;
  const lastSegment = path.split("/").pop();
  function navigateToTab() {
    if (lastSegment === "exercise") {
      const newPath = path.replace("/exercise", "");
      navigate(newPath, { history: "replace" });
    } else {
      navigate(`${path}/exercise`);
    }
  }

  return (
    <div class="bg-muted text-muted-foreground grid h-10 w-full grid-cols-2 items-center justify-center rounded-md p-1">
      <button
        class={`ring-offset-background inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all disabled:pointer-events-none ${
          lastSegment === "exercise"
            ? "hover:bg-primary/80 hover:text-background"
            : "bg-background text-foreground shadow-sm"
        }`}
        disabled={lastSegment !== "exercise"}
        onClick={() => navigateToTab()}
      >
        Theory & Concepts
      </button>
      <button
        class={`ring-offset-background inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all disabled:pointer-events-none ${
          lastSegment === "exercise"
            ? "bg-background text-foreground shadow-sm"
            : "hover:bg-primary/80 hover:text-background"
        }`}
        disabled={lastSegment === "exercise"}
        onClick={() => navigateToTab()}
      >
        Coding Exercise
      </button>
    </div>
  );
};
