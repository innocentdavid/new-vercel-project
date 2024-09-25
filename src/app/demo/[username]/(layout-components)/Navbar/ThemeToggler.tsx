"use client";

import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group flex items-center gap-2 px-2 py-2 font-medium transition-colors duration-200 ease-in-out bg-white/0 rounded-lg hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted"
    >
      <span className="sr-only">Open Menu</span>
      {theme === "dark" ? (
        <HiOutlineMoon className="size-6 group-hover:rotate-12 group-hover:scale-110 transition-transform ease-in-out duration-200" />
      ) : (
        <HiOutlineSun className="size-6 group-hover:rotate-12 group-hover:scale-110 transition-transform ease-in-out duration-200" />
      )}
    </button>
  );
}
