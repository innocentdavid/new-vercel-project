"use client";

import { AreaChart, BadgeDelta, CustomTooltipProps } from "@tremor/react";
import { PiImage } from "react-icons/pi";
import { CustomTooltip } from "./CustomTooltip";
import minimizeNumber from "@/lib/minimize-number";

const followersDataGenerator = () => {
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

    const timeDifferenceInDays =
      (endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    const followers = Math.round(
      938517 +
        ((915883 - 938517) * (timeDifferenceInDays / 30) ** (1 / 1)) /
          (1 + (timeDifferenceInDays / 30) ** (1 / 1))
    );

    data.push({ date: dateStr, Followers: followers });
  }

  return data;
};

export function FollowersChart() {
  const chartData = followersDataGenerator();

  return (
    <div className=" p-4 sm:p-6 rounded-xl border border-tremor-border dark:border-dark-tremor-border">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Followers
          </h2>
          <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {minimizeNumber(chartData[chartData.length - 1].Followers, 0)}{" "}
            <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-normal">
              from {minimizeNumber(chartData[0].Followers, 0)}
            </span>
          </p>
        </div>

        <div className="flex gap-2 items-center">
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
        </div>
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
