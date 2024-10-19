// "use client"

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartData } from "../../(home-components)/Charts/FollowersChartV3";

// const data = [
//   { date: "Jun 15", followers: 1.4 },
//   { date: "Jun 18", followers: 1.45 },
//   { date: "Jun 21", followers: 1.5 },
//   { date: "Jun 24", followers: 1.6 },
//   { date: "Jun 27", followers: 1.7 },
//   { date: "Jun 30", followers: 1.8 },
//   { date: "Jul 2", followers: 1.9 },
//   { date: "Jul 4", followers: 2.0 },
//   { date: "Jul 6", followers: 2.2 },
//   { date: "Jul 8", followers: 2.4 },
//   { date: "Jul 10", followers: 2.7 },
//   { date: "Jul 12", followers: 3.0 },
//   { date: "Jul 15", followers: 3.146 },
// ];

export function FollowersGrowthChart({
  chartData,
}: {
  chartData: ChartData[];
}) {
  // console.log("chartData");
  // console.log(chartData);

  return (
    <Card className="bg-white dark:bg-[#0A0F0F]">
      <CardContent className="p-6">
        <div className="block w-full mb-2 sm:flex">
          <div className="w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex flex-row items-center">
                    <div className="inline-flex items-center mb-1 text-xl font-bold tracking-tight text-gray-800 font-dashboard">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mr-3 w-7 h-7 text-emerald-500"
                      >
                        <g fill="currentColor">
                          <rect
                            width={20}
                            height={20}
                            x={2}
                            y={2}
                            opacity="0.12"
                            rx={5}
                          />
                          <path d="M17.25 8v4a.749.749 0 1 0 1.5 0V8c0-.42-.34-.75-.75-.75-.42 0-.75.33-.75.75m.75-.75h-4c-.42 0-.75.33-.75.75 0 .41.33.75.75.75h4a.749.749 0 1 0 0-1.5m-.58.26-3.59 4.29c-.48.57-1.36.61-1.89.08a2.77 2.77 0 0 0-3.93 0l-2.57 2.56c-.3.29-.3.76-.01 1.06.29.29.76.29 1.06 0l2.56-2.57c.49-.5 1.3-.5 1.8-.01a2.777 2.777 0 0 0 4.09-.19l3.58-4.3c.26-.32.22-.8-.1-1.06a.747.747 0 0 0-1.06.09ZM9.99 22.74h4c3.65 0 4.51-.08 5.61-.63a5.8 5.8 0 0 0 2.51-2.52c.55-1.1.62-1.96.62-5.62v-4c0-3.66-.08-4.52-.63-5.62a5.8 5.8 0 0 0-2.52-2.52c-1.1-.56-1.96-.63-5.62-.63h-4c-3.66 0-4.52.07-5.62.62a5.7 5.7 0 0 0-2.52 2.51c-.56 1.09-.63 1.95-.63 5.61v4c0 3.65.07 4.51.62 5.61a5.74 5.74 0 0 0 2.51 2.51c1.09.55 1.95.62 5.61.62Zm0-1.5c-3.35 0-4.15-.07-4.93-.47-.8-.41-1.45-1.06-1.86-1.86-.4-.79-.47-1.58-.47-4.93v-4c0-3.35.06-4.15.46-4.93.4-.8 1.05-1.45 1.85-1.86.78-.4 1.57-.47 4.92-.47h4c3.34 0 4.14.06 4.92.46.79.4 1.44 1.05 1.85 1.85.39.78.46 1.57.46 4.92v4c0 3.34-.07 4.14-.47 4.92-.41.79-1.06 1.44-1.86 1.85-.79.39-1.58.46-4.93.46h-4Z" />
                        </g>
                      </svg>
                      Followers Growth
                      <svg
                        className="w-[18px] h-[18px] ml-2 place-self-center ignore fill-gray-300"
                        stroke="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="1.7px"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          flex: "0 0 auto",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.0023 18.458H12.0115L12.0023 18.4488C12.758 18.4488 13.385 17.8236 13.3875 17.0687C13.3875 17.0702 13.3875 17.0718 13.3875 17.0733V17.0641C13.3875 17.0656 13.3875 17.0672 13.3875 17.0687C13.385 16.3046 12.758 15.6886 12.0023 15.6886C11.2357 15.6886 10.617 16.3071 10.617 17.0733C10.617 17.8303 11.2357 18.4488 12.0023 18.458ZM13.4891 12.8361V12.8453L13.485 12.8378C13.4863 12.8372 13.4877 12.8367 13.4891 12.8361ZM12.935 13.6762C12.9258 13.3084 13.1456 12.9773 13.485 12.8378L13.443 12.7623C14.7913 12.1715 15.6686 10.8514 15.6686 9.38357C15.6686 7.35266 14.0063 5.69101 11.9746 5.70024C9.9428 5.70024 8.28045 7.36189 8.28969 9.40203L8.29892 9.41126C8.29892 9.91899 8.70527 10.3344 9.22245 10.3344C9.73039 10.3344 10.146 9.91899 10.146 9.41126C10.146 8.67275 10.58 8.00809 11.2542 7.72192C12.187 7.31574 13.2767 7.74038 13.6923 8.68198C14.0987 9.61435 13.6738 10.7037 12.7411 11.1191V11.1283C11.7252 11.5622 11.0695 12.5592 11.0787 13.6669L11.088 13.6762C11.088 14.1839 11.4943 14.5993 12.0115 14.5993C12.5194 14.5993 12.935 14.1839 12.935 13.6762Z"
                        />
                      </svg>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="relative z-20">
                    Your Instagram account's follower growth evolution over the
                    last 30 days.
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="text-4xl font-bold text-gray-900 whitespace-nowrap">
              <span className="inline-flex items-center text-zinc-900 dark:text-card-foreground font-semibold text-4xl lg:text-[40px]">
                {new Intl.NumberFormat("en-US").format(
                  chartData[chartData.length - 1]?.Followers
                )}
              </span>
              {/* <span className="ml-2.5 text-4xl translate-y-1">🔥</span> */}
              <PercentageIncrease
                a={chartData[0]?.Followers}
                b={chartData[chartData.length - 1]?.Followers}
              />
            </div>
          </div>
        </div>
        <div className="w-full m-0 mt-6" style={{ height: "265px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorFollowers" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(245, 133, 41, 0.15)" />
                  <stop offset="25%" stopColor="rgba(252, 199, 55, 0.15)" />
                  <stop offset="50%" stopColor="rgba(221, 42, 123, 0.15)" />
                  <stop offset="75%" stopColor="rgba(129, 52, 175, 0.15)" />
                  <stop offset="100%" stopColor="rgba(81, 91, 212, 0.15)" />
                </linearGradient>
                <linearGradient
                  id="strokeFollowers"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#FF7F1A" />
                  <stop offset="25%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#F50057" />
                  <stop offset="75%" stopColor="#9B27AF" />
                  <stop offset="100%" stopColor="#3D5AFE" />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F3F4F6"
              />
              <XAxis
                dataKey="date"
                axisLine={{ stroke: "#F3F4F6" }}
                tickLine={false}
                tick={{ fill: "#B4B6BB", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#B4B6BB", fontSize: 12 }}
                dx={-10}
              />
              <RechartsTooltip
                cursor={false}
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white dark:bg-primary-500 p-2 border rounded shadow">
                        <p className="text-sm">{`Date: ${label}`}</p>
                        <p className="text-sm font-bold">{`Followers: ${payload[0].value}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="Followers"
                stroke="url(#strokeFollowers)"
                fill="url(#colorFollowers)"
                strokeWidth={2}
                dot={{
                  stroke: "white",
                  strokeWidth: 3,
                  r: 4,
                  fill: "white",
                  fillOpacity: 0.55,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

interface PercentageIncreaseProps {
  a: number; // initial value
  b: number; // new value
}

const PercentageIncrease: React.FC<PercentageIncreaseProps> = ({ a, b }) => {
  const calculatePercentageIncrease = (
    initial: number,
    newVal: number
  ): string => {
    if (initial === 0) return "0%"; // Avoid division by zero
    const increase = newVal - initial;
    const percentage = ((increase / initial) * 100).toFixed(1);
    return `${percentage}%`;
  };

  const percentageIncrease = calculatePercentageIncrease(a, b);

  return (
    <div className="ml-4 mt-[3px] mb-1 align-middle inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        className="self-center flex-shrink-0 w-3 h-3 mr-1 text-green-500"
      >
        <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z" />
      </svg>
      +{percentageIncrease}
    </div>
  );
};
