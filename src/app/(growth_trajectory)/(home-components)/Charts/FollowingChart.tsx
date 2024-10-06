"use client";

import { AreaChart, BadgeDelta, CustomTooltipProps } from "@tremor/react";
// import { PiImage } from "react-icons/pi";
import { CustomTooltip } from "./CustomTooltip";
import minimizeNumber from "@/lib/minimize-number";

const followingsDataGenerator = () => {
  const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const endDate = new Date();
  const data = [];

  for (
    let date = new Date(startDate.getTime());
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dateStr = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    }).format(date);

    const initialFollowings = 1701;
    const finalFollowings = 1690;

    const timeDifferenceInDays =
      (endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

    let followings = Math.round(
      finalFollowings +
        ((initialFollowings - finalFollowings) *
          (timeDifferenceInDays / 30) ** (1 / 1)) /
          (1 + (timeDifferenceInDays / 30) ** (1 / 1))
    );

    if (data.length === 0) {
      followings = initialFollowings;
    }

    data.push({ date: dateStr, Followings: followings });
  }

  return data;
};

const futureFollowingsDataGenerator = (currentFollowingsCount: number) => {
  const startDate = new Date();
  const endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
  const data = [];

  // Calculate the percentage decrease based on the current followings count
  let percentageDecrease;
  if (currentFollowingsCount >= 0 && currentFollowingsCount <= 5000) {
    percentageDecrease = 0.042; // 4.2% decrease
  } else if (currentFollowingsCount >= 5001 && currentFollowingsCount <= 100000) {
    percentageDecrease = 0.085; // 8.5% decrease
  } else {
    percentageDecrease = 0.15; // 15% decrease
  }

  // Calculate the final target followings count after the percentage decrease
  const targetFollowingsCount = Math.round(
    currentFollowingsCount * (1 - percentageDecrease)
  );

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

    // Apply a logistic-like decrease formula to simulate smooth followings decrease
    const decayFactor = 1.05; // Controls how fast the decrease happens
    const progression = (timeDifferenceInDays / 30) ** decayFactor;
    const followings = Math.round(
      currentFollowingsCount -
        (currentFollowingsCount - targetFollowingsCount) * progression
    );

    data.push({ date: dateStr, Followings: followings });
  }

  return data;
};

export function FollowingChart({
  currentFollowingsCount,
}: {
  currentFollowingsCount?: number | null;
}) {
  const chartData = currentFollowingsCount
    ? futureFollowingsDataGenerator(currentFollowingsCount)
    : followingsDataGenerator();

  return (
    <div className=" p-4 sm:p-6  rounded-xl border border-tremor-border dark:border-dark-tremor-border">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Followings
          </h2>
          <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {minimizeNumber(chartData[chartData.length - 1].Followings, 0)}{" "}
            <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-normal">
              from {minimizeNumber(chartData[0].Followings, 0)}
            </span>
          </p>
        </div>

        <div className="flex gap-2 items-center">
          {/* <button className="flex items-center gap-2 p-1.5 text-stone-600 font-semibold transition-colors duration-200 ease-in-out bg-white/0 rounded-lg hover:bg-stone-100">
            <PiImage />
            <span className="sr-only">Download Chart</span>
          </button> */}
          <BadgeDelta deltaType="moderateDecrease" isIncreasePositive={true}>
            4.2%
          </BadgeDelta>
        </div>
      </div>

      <AreaChart
        className="h-40 mt-8"
        data={chartData}
        index="date"
        categories={["Followings"]}
        colors={["yellow"]}
        valueFormatter={(n) => minimizeNumber(n, 0)}
        // yAxisWidth={60}
        // autoMinValue
        minValue={1685}
        onValueChange={(v) => console.log(v)}
        customTooltip={CustomTooltip}
        showLegend={false}
      />
    </div>
  );
}
