"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

const followersDataGeneratorV2 = (
  currentFollowersCount: number | null = null,
  range: "daily" | "weekly" | "monthly" = "monthly"
) => {
  let totalPeriods;
  let interval;
  let growthRange;

  switch (range) {
    case "daily":
      totalPeriods = 12;
      interval = 1;
      growthRange = { min: 30, max: 40 };
      break;
    case "weekly":
      totalPeriods = 12;
      interval = 7;
      growthRange = { min: 250 * 7, max: 325 * 7 };
      break;
    case "monthly":
      totalPeriods = 12;
      interval = 30;
      growthRange = { min: 1000 * 12, max: 1300 * 12 };
      break;
    default:
      totalPeriods = 12;
      interval = 30;
      growthRange = { min: 1000 * 12, max: 1300 * 12 };
  }

  const data = [];
  let startDate, endDate;
  let startingFollowersCount, endingFollowersCount;
  let startingNormalCount, endingNormalCount;
  const isPastData = !currentFollowersCount;

  if (isPastData) {
    // Generate past data
    endDate = new Date();
    startDate = new Date();
    startDate.setDate(startDate.getDate() - totalPeriods * interval);

    // Use default values for past data
    startingFollowersCount = 915883;
    endingFollowersCount = 938517;
    startingNormalCount = 915883;
    endingNormalCount = 938517 * 0.6; // Lower the endingNormalCount to create more distinction
  } else {
    // Generate future data
    startDate = new Date();
    endDate = new Date();
    endDate.setDate(endDate.getDate() + totalPeriods * interval);

    // Calculate target followers increase
    const targetFollowersIncrease =
      Math.floor(Math.random() * (growthRange.max - growthRange.min + 1)) +
      growthRange.min;

    // Set starting and ending counts for future data
    startingFollowersCount = currentFollowersCount;
    endingFollowersCount = currentFollowersCount + targetFollowersIncrease;
    startingNormalCount = currentFollowersCount;
    if (range === "daily") {
      endingNormalCount = currentFollowersCount + targetFollowersIncrease * 0.3; // Lower the growth for Normal for daily
    } else {
      endingNormalCount = currentFollowersCount + targetFollowersIncrease * 0.5; // Lower the growth for Normal for other ranges
    }
  }

  const totalDays = Math.round(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  for (
    let date = new Date(startDate.getTime());
    date <= endDate;
    date.setDate(date.getDate() + interval)
  ) {
    const dateStr = date.toISOString().split("T")[0]; // Full date in YYYY-MM-DD format

    let timeDifferenceInDays;
    if (isPastData) {
      timeDifferenceInDays = Math.round(
        (endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      );
    } else {
      timeDifferenceInDays = Math.round(
        (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
    }

    const progression = (timeDifferenceInDays / totalDays) ** 1.05;

    // Calculate Followers
    const followers = Math.round(
      startingFollowersCount +
        (endingFollowersCount - startingFollowersCount) * progression
    );

    // Calculate Normal (slower growth)
    // console.log({startingNormalCount, endingNormalCount, progression});

    const normal = Math.round(
      (startingNormalCount -
        (0.2 * startingNormalCount)) +
        (endingNormalCount - startingNormalCount) * progression
    );

    // console.log("normal");
    // console.log(normal);
    

    // Ensure Followers > Normal
    const finalNormal = normal < followers ? normal : followers - 5; // Increase the gap between Followers and Normal

    data.push({ date: dateStr, Followers: followers, Normal: finalNormal });
  }

  return data;
};

const tickFormatter = (
  value: number,
  range: "daily" | "weekly" | "monthly"
) => {
  const date = new Date(value);
  if (range === "daily") {
    return new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  } else if (range === "weekly") {
    const weekStart = new Date(value);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    return `${new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
    }).format(weekStart)} - ${new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
    }).format(weekEnd)}`;
  } else if (range === "monthly") {
    return new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
  } else {
    return "";
  }
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3B81F6",
  },
  mobile: {
    label: "Mobile",
    color: "#EAB305",
  },
} satisfies ChartConfig;

export type ChartData = {
  date: string;
  Followers: number;
  Normal: number;
};

const groupChartData = (
  data: ChartData[],
  range: "daily" | "weekly" | "monthly"
): ChartData[] => {
  if (range === "daily") {
    return data;
  } else if (range === "weekly") {
    const weeklyData: ChartData[] = [];
    for (let i = 0; i < data.length; i += 7) {
      const week = data.slice(i, i + 7);
      const weekDate = week[0]?.date;
      const followers = Math.round(
        week.reduce((acc, d) => acc + d.Followers, 0) / week.length
      );
      const normal = Math.round(
        week.reduce((acc, d) => acc + d.Normal, 0) / week.length
      );
      weeklyData.push({ date: weekDate, Followers: followers, Normal: normal });
    }
    return weeklyData;
  } else if (range === "monthly") {
    const monthlyData: ChartData[] = [];
    let currentMonth = new Date(data[0].date).getMonth();
    let monthFollowers = 0;
    let monthNormal = 0;
    let count = 0;
    for (const d of data) {
      const month = new Date(d.date).getMonth();
      if (month === currentMonth) {
        monthFollowers += d.Followers;
        monthNormal += d.Normal;
        count++;
      } else {
        monthlyData.push({
          date: new Date(
            data.find((d) => new Date(d.date).getMonth() === currentMonth)
              ?.date || ""
          )
            .toISOString()
            .split("T")[0],
          Followers: Math.round(monthFollowers / count),
          Normal: Math.round(monthNormal / count),
        });
        currentMonth = month;
        monthFollowers = d.Followers;
        monthNormal = d.Normal;
        count = 1;
      }
    }
    monthlyData.push({
      date: new Date(
        data.find((d) => new Date(d.date).getMonth() === currentMonth)?.date ||
          ""
      )
        .toISOString()
        .split("T")[0],
      Followers: Math.round(monthFollowers / count),
      Normal: Math.round(monthNormal / count),
    });
    return monthlyData;
  } else {
    return data;
  }
};

export function FollowersChartV3({
  currentFollowersCount,
  setChartData,
}: {
  currentFollowersCount?: number | null;
  setChartData: any;
}) {
  const [chartDataMain, setChartDataMain] = useState<ChartData[]>([]);
  const [range, setRange] = useState<"daily" | "weekly" | "monthly">("monthly");

  useEffect(() => {
    const range = "daily";
    const generatedChartData = currentFollowersCount
      ? followersDataGeneratorV2(currentFollowersCount, range)
      : followersDataGeneratorV2(null, range);
    setChartData(generatedChartData);
  }, [currentFollowersCount, setChartData]);

  useEffect(() => {
    const generatedChartData = currentFollowersCount
      ? followersDataGeneratorV2(currentFollowersCount, range)
      : followersDataGeneratorV2(null, range);
    const groupedChartData =
      range === "monthly"
        ? groupChartData(generatedChartData, "monthly")
        : generatedChartData;
    setChartDataMain(groupedChartData);
  }, [currentFollowersCount, range, setChartData]);

  return (
    <>
      <div className=" p-4 sm:p-6 rounded-xl border border-tremor-border dark:border-dark-tremor-border">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Followers
            </h2>
            <div className="flex gap-2 mt-2">
              <p className="text-lg text-dark-tremor-content-strong font-semibold bg-primary-400 py-1 px-3 rounded-md">
                Gaisnty:{" "}
                {new Intl.NumberFormat("en-US").format(
                  chartDataMain[chartDataMain.length - 1]?.Followers
                )}
              </p>
              <p className="text-base text-dark-tremor-content-strong font-medium bg-gray-400 py-1 px-3 rounded-md">
                Normal:{" "}
                {new Intl.NumberFormat("en-US").format(
                  chartDataMain[0]?.Followers
                )}
              </p>
            </div>
          </div>

          <Select
            defaultValue={range}
            onValueChange={(value) => setRange(value as any)}
          >
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
        </div>

        <ChartContainer config={chartConfig} className="h-[450px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartDataMain}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
              tickFormatter={(value) => tickFormatter(value, range)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            {/* <Area
            dataKey="Followers"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey="Normal"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          /> */}

            <defs>
              <linearGradient id="colorFollowers" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(245,133,41,0.3)" />
                <stop offset="25%" stopColor="rgba(252,199,55,0.3)" />
                <stop offset="50%" stopColor="rgba(221,42,123,0.3)" />
                <stop offset="75%" stopColor="rgba(129,52,175,0.3)" />
                <stop offset="100%" stopColor="rgba(81,91,212,0.3)" />
              </linearGradient>
              <linearGradient id="strokeFollowers" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(245,133,41,1)" />
                <stop offset="25%" stopColor="rgba(252,199,55,1)" />
                <stop offset="50%" stopColor="rgba(221,42,123,1)" />
                <stop offset="75%" stopColor="rgba(129,52,175,1)" />
                <stop offset="100%" stopColor="rgba(81,91,212,1)" />
              </linearGradient>

              {/* <linearGradient id="colorNormal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(245,133,41,0.4)" />
                <stop offset="25%" stopColor="rgba(252,199,55,0.4)" />
                <stop offset="50%" stopColor="rgba(221,42,123,0.4)" />
                <stop offset="75%" stopColor="rgba(129,52,175,0.4)" />
                <stop offset="100%" stopColor="rgba(81,91,212,0.4)" />
              </linearGradient>
              <linearGradient id="strokeNormal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(245,133,41,1)" />
                <stop offset="25%" stopColor="rgba(252,199,55,1)" />
                <stop offset="50%" stopColor="rgba(221,42,123,1)" />
                <stop offset="75%" stopColor="rgba(129,52,175,1)" />
                <stop offset="100%" stopColor="rgba(81,91,212,1)" />
              </linearGradient> */}

              <linearGradient id="colorNormal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(200,200,200,0.4)" />
                <stop offset="50%" stopColor="rgba(150,150,150,0.4)" />
                <stop offset="100%" stopColor="rgba(100,100,100,0.4)" />
              </linearGradient>
              <linearGradient id="strokeNormal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(200,200,200,1)" />
                <stop offset="50%" stopColor="rgba(150,150,150,1)" />
                <stop offset="100%" stopColor="rgba(100,100,100,1)" />
              </linearGradient>
            </defs>
            <Area
              dataKey="Followers"
              type="monotone"
              fill="url(#colorNormal)"
              fillOpacity={0.4}
              // stroke="var(--color-mobile)"
              stroke="url(#strokeNormal)"
              stackId="a"
            />
            <Area
              dataKey="Normal"
              type="monotone"
              fill="url(#colorFollowers)"
              // fillOpacity={0.4}
              // stroke="var(--color-desktop)"
              stroke="url(#strokeFollowers)"
              stackId="a"
            />

            {/* <Area
            dataKey="Followers"
            type="natural"
            fill="url(#gradientFollowers)"
            color="blue"
            fillOpacity={0.8}
            stroke="#1989FF"
            strokeWidth={4}
          />
          <Area
            dataKey="Normal"
            type="natural"
            fill="url(#gradientNormal)"
            color="yellow"
            fillOpacity={0.8}
            stroke="#EAB305"
            strokeWidth={4}
          />
          <defs>
            <linearGradient id="gradientFollowers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1989FF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#1989FF" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="gradientNormal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EAB305" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#EAB305" stopOpacity={0.1} />
            </linearGradient>
          </defs> */}
          </AreaChart>
        </ChartContainer>
      </div>
    </>
  );
}
