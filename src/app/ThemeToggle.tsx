"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className="mt-16 px-4 py-2  dark:text-white text-black dark:bg-black bg-white font-semibold rounded-md"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      Change Theme
    </button>
  );
}
