type DarkModeToggleProps = {
  isDark: boolean;
  toggle: () => void;
};

export function DarkModeToggle({
  isDark,
  toggle,
}: DarkModeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="rounded-md border border-gray-300 px-3 py-1 text-xs dark:border-gray-700"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
