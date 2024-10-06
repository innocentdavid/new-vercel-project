"use client";

import { AreaChart, BadgeDelta, CustomTooltipProps } from "@tremor/react";
import { PiImage } from "react-icons/pi";
import { CustomTooltip } from "./CustomTooltip";
import minimizeNumber from "@/lib/minimize-number";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

// const followersDataGenerator = () => {
//   const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
//   const endDate = new Date();
//   const data = [];

//   for (
//     let date = new Date(startDate.getTime());
//     date <= endDate;
//     date.setDate(date.getDate() + 1)
//   ) {
//     const dateStr = new Intl.DateTimeFormat("en-US", {
//       month: "long",
//       day: "numeric",
//     }).format(date);

//     const timeDifferenceInDays =
//       (endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
//     const followers = Math.round(
//       938517 +
//         ((915883 - 938517) * (timeDifferenceInDays / 30) ** (1 / 1)) /
//           (1 + (timeDifferenceInDays / 30) ** (1 / 1))
//     );

//     data.push({ date: dateStr, Followers: followers });
//   }

//   return data;
// };

const followersDataGenerator = () => {
  const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
  const endDate = new Date();
  const data = [];

  const initialFollowers = 938517;
  const finalFollowers = 915883;
  const initialNormal = initialFollowers * 0.95; // Normal starts lower than Followers
  let finalNormal = finalFollowers * 0.95; // Normal target should be less than Followers

  for (
    let date = new Date(startDate.getTime());
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dateStr = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    }).format(date);

    const timeDifferenceInDays =
      (endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

    // Followers calculation using logistic-like formula
    const followers = Math.round(
      initialFollowers +
        ((finalFollowers - initialFollowers) * (timeDifferenceInDays / 30)) /
          (1 + timeDifferenceInDays / 30)
    );

    // Normal calculation, using similar logic but with smaller increase
    const normal = Math.round(
      initialNormal +
        ((finalNormal - initialNormal) * (timeDifferenceInDays / 30)) /
          (1 + timeDifferenceInDays / 30)
    );

    // Ensure that Followers > Normal
    finalNormal = normal < followers ? normal : followers - 1;

    data.push({ date: dateStr, Followers: followers, Normal: finalNormal });
  }

  return data;
};

const futureFollowersDataGenerator = (currentFollowersCount: number) => {
  const startDate = new Date();
  const endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const data = [];

  // Calculate the total increase needed
  let targetFollowersIncrease;
  if (currentFollowersCount >= 0 && currentFollowersCount <= 5000) {
    targetFollowersIncrease =
      Math.floor(Math.random() * (1200 - 800 + 1)) + 800;
  } else if (currentFollowersCount >= 5000 && currentFollowersCount <= 100000) {
    targetFollowersIncrease = currentFollowersCount * 0.2; // For >5,000 <= 100,000 followers
  } else {
    targetFollowersIncrease = currentFollowersCount * 0.1; // For >5000 followers
  }

  const targetFollowersCount = currentFollowersCount + targetFollowersIncrease;

  // Iterate over the next 30 days
  for (
    let date = new Date(startDate.getTime());
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dateStr = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    }).format(date);

    const timeDifferenceInDays =
      (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

    // Apply a logistic-like growth formula to simulate an accelerating growth curve
    const growthFactor = 1.05; // Factor to increase the speed of growth
    const progression = (timeDifferenceInDays / 30) ** growthFactor;
    const followers = Math.round(
      currentFollowersCount +
        (targetFollowersCount - currentFollowersCount) * progression
    );

    data.push({ date: dateStr, Followers: followers });
  }

  return data;
};

export function FollowersChart({
  currentFollowersCount,
}: {
  currentFollowersCount?: number | null;
}) {
  const chartData = currentFollowersCount
    ? futureFollowersDataGenerator(currentFollowersCount)
    : followersDataGenerator();
  const [range, setRange] = useState("monthly");

  return (
    <div className=" p-4 sm:p-6 rounded-xl border border-tremor-border dark:border-dark-tremor-border">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Followers
          </h2>
          {/* <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {minimizeNumber(chartData[chartData.length - 1]?.Followers, 0)}{" "}
            <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-normal">
              from {minimizeNumber(chartData[0]?.Followers, 0)}
            </span>
          </p> */}
          <div className="flex gap-2 mt-2">
            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold bg-primary-400 py-1 px-3 rounded-md">
              Gaisnty:{" "}
              {new Intl.NumberFormat("en-US").format(
                chartData[chartData.length - 1]?.Followers
              )}
            </p>
            <p className="text-base text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium bg-gray-400 py-1 px-3 rounded-md">
              Normal:{" "}
              {new Intl.NumberFormat("en-US").format(chartData[0]?.Followers)}
            </p>
          </div>
        </div>

        <Select>
          <SelectTrigger className="w-[180px] bg-transparent border">
            <div className="flex items-center">
              <CalendarDays className="mr-3" />{" "}
              <SelectValue placeholder="Select range" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>

        {/* <div className="flex gap-2 items-center">
          <button
            className={
              "flex items-center gap-2 p-1.5 text-tremor-content dark:text-dark-tremor-content font-semibold transition-colors duration-200 ease-in-out bg-white/0 rounded-lg hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle " +
              "pointer-events-none"
            }
          >
            <PiImage />
            <span className="sr-only">Download Chart</span>
          </button>

          <BadgeDelta deltaType="increase" isIncreasePositive={true}>
            21.2%
          </BadgeDelta>
        </div> */}
      </div>

      <AreaChart
        className="h-60 mt-8"
        data={chartData}
        index="date"
        categories={["Followers"]}
        colors={["blue"]}
        valueFormatter={(n) => minimizeNumber(n, 0)}
        // yAxisWidth={60}
        // curveType="natural"
        autoMinValue
        onValueChange={(v) => console.log(v)}
        customTooltip={CustomTooltip}
        showLegend={false}
        // startEndOnly
        // minValue={750000}
      />
    </div>
  );
}
