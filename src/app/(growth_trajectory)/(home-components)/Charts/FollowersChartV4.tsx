"use client";

// import { AreaChart, BadgeDelta, CustomTooltipProps } from "@tremor/react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
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
import { CalendarDays, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

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

    // Apply a logistic-like growth formula to simulate an accelerating growth curve
    const growthFactor = 1.05; // Factor to increase the speed of growth
    const progression = (timeDifferenceInDays / 30) ** growthFactor;

    // Calculate Normal (slower growth)
    const normal = Math.round(938517 + (915883 - 938517) * progression);

    // Ensure Followers > Normal
    const finalNormal = normal < followers ? normal : followers - 1;

    data.push({ date: dateStr, Followers: followers, Normal: finalNormal });
  }

  return data;
};

const futureFollowersDataGenerator = (currentFollowersCount: number) => {
  const startDate = new Date();
  const endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
  const data = [];

  // Calculate the total increase needed
  let targetFollowersIncrease;
  if (currentFollowersCount >= 0 && currentFollowersCount <= 5000) {
    targetFollowersIncrease =
      Math.floor(Math.random() * (1200 - 800 + 1)) + 800;
  } else if (currentFollowersCount >= 5000 && currentFollowersCount <= 100000) {
    targetFollowersIncrease = currentFollowersCount * 0.2; // For >5,000 <= 100,000 followers
  } else {
    targetFollowersIncrease = currentFollowersCount * 0.1; // For >100,000 followers
  }

  const targetFollowersCount = currentFollowersCount + targetFollowersIncrease;
  const targetNormalIncrease = targetFollowersIncrease * 0.8; // Normal growth is slower
  const targetNormalCount = currentFollowersCount + targetNormalIncrease;

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

    // Calculate Followers
    const followers = Math.round(
      currentFollowersCount +
        (targetFollowersCount - currentFollowersCount) * progression
    );

    // Calculate Normal (slower growth)
    const normal = Math.round(
      currentFollowersCount +
        (targetNormalCount - currentFollowersCount) * progression
    );

    // Ensure Followers > Normal
    const finalNormal = normal < followers ? normal : followers - 1;

    data.push({ date: dateStr, Followers: followers, Normal: finalNormal });
  }

  return data;
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

export function FollowersChartV4({
  innitialChartData,
}: {
  innitialChartData: {
    date: string;
    Followers: number;
    Normal: number;
  }[];
}) {
  const [chartData, setChartData] = useState(innitialChartData);

  useEffect(() => {
    setChartData(innitialChartData);
  }, [innitialChartData]);

  return (
    <Card className="bg-transparent p-4 sm:p-6 rounded-xl border border-tremor-border dark:border-dark-tremor-border">
      <CardHeader>
        <CardTitle className="font-normal !text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Sample Daily Followers
        </CardTitle>
        <CardDescription>
          <div className="flex gap-2 mt-2">
            <p className="text-lg text-dark-tremor-content-strong font-semibold bg-primary-400 py-1 px-3 rounded-md">
              Gaisnty:{" "}
              {new Intl.NumberFormat("en-US").format(
                chartData[chartData.length - 1]?.Followers
              )}
            </p>
            <p className="text-base text-dark-tremor-content-strong font-medium bg-gray-400 py-1 px-3 rounded-md">
              Normal:{" "}
              {new Intl.NumberFormat("en-US").format(chartData[0]?.Followers)}
            </p>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="!p-0">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="Followers"
              stackId="a"
              // fill="var(--color-desktop)"
              fill="url(#colorNormalFollowerGraph)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="Normal"
              stackId="a"
              // fill="var(--color-mobile)"
              fill="url(#colorFollowersFollowerGraph)"
              radius={[4, 4, 0, 0]}
            />

            <defs>
              <linearGradient id="colorFollowersFollowerGraph" x1="0" y1="0" x2="1" y2="0">
                {/* <stop offset="0%" stopColor="rgba(245,133,41,0.3)" />
                <stop offset="25%" stopColor="rgba(252,199,55,0.3)" />
                <stop offset="0%" stopColor="rgba(221,42,123,0.3)" /> */}
                <stop offset="0%" stopColor="rgba(129,52,175,0.3)" />
                <stop offset="100%" stopColor="rgba(81,91,212,0.3)" />
              </linearGradient>
              
              <linearGradient id="colorNormalFollowerGraph" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(200,200,200,0.4)" />
                <stop offset="50%" stopColor="rgba(150,150,150,0.4)" />
                <stop offset="100%" stopColor="rgba(100,100,100,0.4)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
