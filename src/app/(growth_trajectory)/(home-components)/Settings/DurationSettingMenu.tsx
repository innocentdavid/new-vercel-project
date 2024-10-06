"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { PiCaretDown, PiCheck, PiCheckThin } from "react-icons/pi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function DurationSettingMenu({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const searchParams = useSearchParams();

  const timeframe = searchParams.get("timeframe") || "30D";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={
          "flex items-center gap-2 px-2 py-2 text-tremor-content dark:text-dark-tremor-content-emphasis font-medium text-tremor-default transition-colors duration-200 ease-in-out bg-white/0 rounded-lg hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted " +
          "pointer-events-none"
        }
      >
        <span className="">Last 30 days</span>
        <PiCaretDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        className={
          "sm:-translate-x-8 translate-x-4 w-44 border-tremor-border dark:border-dark-tremor-border bg-tremor-background dark:bg-dark-tremor-background"
        }
      >
        {DURATIONS.map((duration) => (
          <DropdownMenuItem asChild key={duration.value}>
            <Link
              href={"?timeframe=" + duration.value}
              className={twMerge(
                "text-sm px-2 py-2 cursor-pointer flex items-center justify-between",
                timeframe === duration.value
                  ? "font-medium pointer-events-none"
                  : ""
              )}
            >
              {duration.label}{" "}
              {timeframe === duration.value ? (
                <PiCheck className="text-red-500" />
              ) : null}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const DURATIONS = [
  {
    label: "Last 7 days",
    value: "7D",
  },
  {
    label: "Last 30 days",
    value: "30D",
  },
  {
    label: "Last 60 days",
    value: "60D",
  },
  {
    label: "Last 90 days",
    value: "90D",
  },
];
