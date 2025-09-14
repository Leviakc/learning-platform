interface Props {
  theory: string;
  exercise: string;
}

export const Tab = (props: Props) => {
  const path = window.location.pathname;
  const lastSegment = path.split("/").pop();
  const theoryLink =
    lastSegment === "exercise" ? path.replace("/exercise", "") : path;
  const exerciseLink = lastSegment === "exercise" ? path : path + "/exercise";

  return (
    <div class="bg-muted text-muted-foreground grid h-10 w-full grid-cols-2 items-center justify-center rounded-md p-1">
      <a
        data-astro-history="replace"
        href={theoryLink}
        class={`ring-offset-background inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all disabled:pointer-events-none ${
          lastSegment === "exercise"
            ? "hover:bg-primary/80 hover:text-background"
            : "bg-background text-foreground pointer-events-none shadow-sm"
        }`}
      >
        {props.theory}
      </a>
      <a
        href={exerciseLink}
        data-astro-history="replace"
        data-astro-reload
        data-astro-prefetch
        class={`ring-offset-background inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all disabled:pointer-events-none ${
          lastSegment === "exercise"
            ? "bg-background text-foreground pointer-events-none shadow-sm"
            : "hover:bg-primary/80 hover:text-background"
        }`}
      >
        {props.exercise}
      </a>
    </div>
  );
};
