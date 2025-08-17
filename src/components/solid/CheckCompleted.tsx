export const CheckCompleted = () => {
  return (
    <div
      id="completion-status"
      class="hidden items-center gap-2 text-green-600 dark:text-green-400"
    >
      <svg
        class="h-5 w-5"
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
      <span class="font-medium">Completed</span>
    </div>
  );
};
