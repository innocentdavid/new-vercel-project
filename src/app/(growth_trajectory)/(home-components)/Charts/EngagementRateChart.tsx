"use client";

import { AreaChart, BadgeDelta, BarChart, CustomTooltipProps } from "@tremor/react";
import { CustomTooltip } from "./CustomTooltip";

const ratesDataGenerator = () => {
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
    let rate =
      5.4 +
      ((5.1 - 5.4) * (timeDifferenceInDays / 30) ** (1 / 3)) /
        (1 + (timeDifferenceInDays / 30) ** (1 / 3));

    if (data.length === 0) {
      rate = 5.1;
    }
    if (data.length === 1) {
      rate = 5.15;
    }

    data.push({ date: dateStr, "%": Number(rate.toFixed(2)) });
  }

  return data;
};

export function EngagementRateChart() {
  const dataFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}%`;

  const chartData = ratesDataGenerator();

  return (
    <div className=" p-4 sm:p-6  rounded-xl border border-tremor-border dark:border-dark-tremor-border">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Engagement rate
          </h2>
          <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {dataFormatter(chartData[chartData.length - 1]["%"])}{" "}
            <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-normal">
              from {dataFormatter(chartData[0]["%"])}
            </span>
          </p>
        </div>

        <div className="flex gap-2 items-center">
          {/* <button className="flex items-center gap-2 p-1.5 text-stone-600 font-semibold transition-colors duration-200 ease-in-out bg-white/0 rounded-lg hover:bg-stone-100">
            <PiImage />
            <span className="sr-only">Download Chart</span>
          </button> */}
          <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true}>
            8.2%
          </BadgeDelta>
        </div>
      </div>

      <AreaChart
        className="h-80 mt-8"
        data={chartData}
        index="date"
        categories={["%"]}
        colors={["green"]}
        valueFormatter={dataFormatter}
        // yAxisWidth={60}
        // autoMinValue
        minValue={5}
        onValueChange={(v) => console.log(v)}
        customTooltip={CustomTooltip}
        showLegend={false}
      />
    </div>
  );
}
