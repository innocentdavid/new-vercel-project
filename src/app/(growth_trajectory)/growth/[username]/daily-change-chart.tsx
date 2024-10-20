import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartData } from "../../(home-components)/Charts/FollowersChartV3";

// const ratesDataGenerator = () => {
//   const startDate = new Date(Date.now() - 20 * 24 * 60 * 60 * 1000);
//   const endDate = new Date();
//   const data = [];

//   for (
//     let date = new Date(startDate.getTime());
//     date <= endDate;
//     date.setDate(date.getDate() + 1)
//   ) {
//     const dateStr = new Intl.DateTimeFormat("en-US", {
//       month: "numeric",
//       day: "numeric",
//     }).format(date);

//     const timeDifferenceInDays =
//       (endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
//     let rate =
//       5.4 +
//       ((5.1 - 5.4) * (timeDifferenceInDays / 30) ** (1 / 3)) /
//         (1 + (timeDifferenceInDays / 30) ** (1 / 3));

//     if (data.length === 0) {
//       rate = 5.1;
//     }
//     if (data.length === 1) {
//       rate = 5.15;
//     }

//     data.push({ date: dateStr, "%": Number(rate.toFixed(2)) });
//   }

//   return data;
// };

const data = [
  { date: "09/23", "%": 80 },
  { date: "09/24", "%": 85.78 },
  { date: "09/25", "%": 91.94 },
  { date: "09/26", "%": 96.2 },
  { date: "09/27", "%": 98.1 },
  { date: "09/28", "%": 100.06 },
  { date: "09/29", "%": 105.58 },
  { date: "09/30", "%": 115.56 },
  { date: "10/01", "%": 126.68 },
  { date: "10/02", "%": 133.52 },
  { date: "10/03", "%": 133.28 },
  { date: "10/04", "%": 129.02 },
  { date: "10/05", "%": 128.04 },
  { date: "10/06", "%": 136.16 },
  { date: "10/07", "%": 152.24 },
  { date: "10/08", "%": 168.16 },
  { date: "10/09", "%": 174.68 },
  { date: "10/10", "%": 169.26 },
  { date: "10/11", "%": 159.02 },
  { date: "10/12", "%": 156 },
  { date: "10/13", "%": 167.62 },
  { date: "10/14", "%": 190.02 },
];

export function DailyChangeChart({
  chartData,
}: {
  chartData: { date: string; "%": number }[];
}) {
  // const chartData = ratesDataGenerator();
  // const chartData = data;

  return (
    <Card className="divide-y border mb-6 md:mb-8 divide-gray-200 overflow-hidden border-gray-100_ bg-white dark:bg-[#0A0F0F] col-span-2 pb-0">
      <CardContent className="p-6">
        <div className="block w-full px-3 pb-0 mb-5 sm:flex sm:px-3">
          <div className="w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="inline-flex items-center mb-1 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-500 font-dashboard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="mr-3 w-7 h-7 text-sky-500"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M22 10c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 2 16.8 2 14 2h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 4.73C2 5.8 2 7.2 2 10v4c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 18.2 22 16.8 22 14zm-11.711 5c-1.68 0-2.52 0-2.935-.34a1.5 1.5 0 0 1-.548-1.208c.018-.536.57-1.168 1.677-2.432l1.71-1.956c.624-.712.936-1.069 1.306-1.2a1.5 1.5 0 0 1 1.002 0c.37.131.682.488 1.305 1.2l1.711 1.956c1.106 1.264 1.66 1.896 1.677 2.432a1.5 1.5 0 0 1-.549 1.208c-.414.34-1.254.34-2.934.34z"
                        clipRule="evenodd"
                        opacity="0.12"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M2 10c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 2.545C5.8 2 7.2 2 10 2h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 5.8 22 7.2 22 10v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14z"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13.806 9.064c-.623-.712-.935-1.069-1.305-1.2a1.5 1.5 0 0 0-1.002 0c-.37.131-.682.488-1.305 1.2L8.483 11.02c-1.106 1.264-1.66 1.896-1.677 2.432a1.5 1.5 0 0 0 .548 1.208C7.77 15 8.61 15 10.29 15h3.422c1.68 0 2.52 0 2.934-.34a1.5 1.5 0 0 0 .549-1.208c-.017-.536-.57-1.168-1.677-2.432z"
                      ></path>
                    </svg>
                    Engagement Rate
                    <svg
                      className="w-[18px] h-[18px] ml-2 place-self-center ignore fill-gray-300"
                      stroke="none"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="1.7px"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.0023 18.458H12.0115L12.0023 18.4488C12.758 18.4488 13.385 17.8236 13.3875 17.0687C13.3875 17.0702 13.3875 17.0718 13.3875 17.0733V17.0641C13.3875 17.0656 13.3875 17.0672 13.3875 17.0687C13.385 16.3046  12.758 15.6886 12.0023 15.6886C11.2357 15.6886 10.617 16.3071 10.617 17.0733C10.617 17.8303 11.2357 18.4488 12.0023 18.458ZM13.4891 12.8361V12.8453L13.485 12.8378C13.4863 12.8372 13.4877 12.8367 13.4891 12.8361ZM12.935 13.6762C12.9258 13.3084 13.1456 12.9773 13.485 12.8378L13.443 12.7623C14.7913 12.1715 15.6686 10.8514 15.6686 9.38357C15.6686 7.35266 14.0063 5.69101 11.9746 5.70024C9.9428 5.70024 8.28045 7.36189 8.28969 9.40203L8.29892 9.41126C8.29892 9.91899 8.70527 10.3344 9.22245 10.3344C9.73039 10.3344 10.146 9.91899 10.146 9.41126C10.146 8.67275 10.58 8.00809 11.2542 7.72192C12.187 7.31574 13.2767 7.74038 13.6923 8.68198C14.0987 9.61435 13.6738 10.7037 12.7411 11.1191V11.1283C11.7252 11.5622 11.0695 12.5592 11.0787 13.6669L11.088 13.6762C11.088 14.1839 11.4943 14.5993 12.0115 14.5993C12.5194 14.5993 12.935 14.1839 12.935 13.6762Z"
                      ></path>
                    </svg>
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  <div>
                    Shows the change in followers and following of the account
                    compared to <b>the previous day</b>.
                    <br />
                    <i style={{ opacity: 0.9 }}>
                      The start date of this chart changes according to the
                      first time the profile was added on UpGrow.
                    </i>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="text-2xl font-bold text-gray-900 dark:text-card-foreground whitespace-nowrap">
              <span className="inline-flex items-center font-dashboard">
                {chartData?.[chartData.length - 1]?.["%"]}%
              </span>
              <PercentageIncrease
                a={chartData?.[0]?.["%"]}
                b={chartData[chartData.length - 1]?.["%"]}
              />
            </div>
          </div>
          {/* <div className="flex w-full">
            <div className="relative inline-flex items-center justify-start w-full pr-1 mt-3 sm:justify-end sm:mt-0">
              <div className="mx-auto flex flex-col items-center -ml-4 sm:-ml-6 lg:ml-0 lg:mr-0 overflow-scroll lg:w-auto w-[calc(100%_+_32px)] lg:overflow-hidden px-4 lg:px-0">
                <div className="relative inline-flex self-start justify-start w-auto p-1 rounded-lg tremor-TabGroup-root flex-nowrap sm:self-end bg-[#F3F4F6] backdrop-blur-sm">
                  <span
                    className="absolute top-0 bottom-0 flex py-1 transition-all duration-300 rounded-lg -z-10"
                    style={{
                      left:
                        activeTab === "monthly"
                          ? "4px"
                          : activeTab === "weekly"
                          ? "90px"
                          : "176px",
                      width: "86px",
                    }}
                  >
                    <span className="w-full h-full overflow-visible bg-white rounded shadow"></span>
                  </span>
                  {["monthly", "weekly", "daily"].map((tab) => (
                    <button
                      key={tab}
                      className={`font-medium my-auto cursor-pointer select-none rounded whitespace-nowrap text-sm text-center py-1.5 flex items-center justify-center px-4 ${
                        activeTab === tab
                          ? "text-zinc-900 dark:text-gray-500"
                          : "group hover:text-neutral-500 text-neutral-400"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {
                        [
                          { name: "All Time", value: "monthly" },
                          { name: "30 Days", value: "weekly" },
                          { name: "Daily", value: "daily" },
                        ].find((i) => i.value === tab)?.name
                      }
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div
          id="daily-change-chart"
          className="-ml-[20px] w-[calc(100%_+_40px)] mb-2.5"
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              // data={data}
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient
                  id="gradient-blue-dim"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="20%"
                    stopColor="#199af5"
                    stopOpacity="1"
                    style={{ filter: "saturate(1.4)" }}
                  />
                  <stop
                    offset="100%"
                    stopColor="#199af5"
                    stopOpacity="0.9"
                    style={{ filter: "saturate(1.4)" }}
                  />
                </linearGradient>
                <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="20%" stopColor="#199af5" stopOpacity="1" />
                  <stop offset="100%" stopColor="#199af5" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="6 6"
                stroke="var(--color-gray-200)"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                axisLine={{ stroke: "var(--color-gray-200)" }}
                tickLine={{ stroke: "var(--color-gray-200)" }}
                // tick={{ fill: "var(--color-gray-400)", fontSize: 14 }}
                tick={{ fill: "#B4B6BB", fontSize: 12 }}
                dy={6}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                // tick={{ fill: "var(--color-gray-400)", fontSize: 14 }}
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
                        <p className="text-sm font-bold">{`${payload[0].value} %`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="%"
                fill="url(#gradient-blue)"
                radius={[5, 5, 0, 0]}
                barSize={26}
              />
            </BarChart>
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
    <div className="align-middle ml-4 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
      >
        <path
          fillRule="evenodd"
          d="M10 15a.75.75 0 0 1-.75-.75V7.612L7.29 9.77a.75.75 0 0 1-1.08-1.04l3.25-3.5a.75.75 0 0 1 1.08 0l3.25 3.5a.75.75 0 1 1-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0 1 10 15Z"
          clipRule="evenodd"
        ></path>
      </svg>
      +{percentageIncrease}
    </div>
    // <div
    //   className="ml-4 mt-[3px] mb-1 align-middle inline-flex items-center rounded-full text-shadow px-2.5 py-0.5 text-sm font-medium text-white"
    //   style={{
    //     background:
    //       "linear-gradient(74.41deg, rgb(67, 153, 23) -52.09%, rgb(176, 231, 82) 170.9%)",
    //   }}
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 20 20"
    //     fill="currentColor"
    //     aria-hidden="true"
    //     data-slot="icon"
    //     className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-white"
    //   >
    //     <path
    //       fillRule="evenodd"
    //       d="M10 15a.75.75 0 0 1-.75-.75V7.612L7.29 9.77a.75.75 0 0 1-1.08-1.04l3.25-3.5a.75.75 0 0 1 1.08 0l3.25 3.5a.75.75 0 1 1-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0 1 10 15Z"
    //       clipRule="evenodd"
    //     />
    //   </svg>
    //   {percentageIncrease}
    // </div>
  );
};
