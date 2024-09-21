"use client";

import { Area, AreaChart, ResponsiveContainer } from "recharts";

const chartData = [
  { value: 10 },
  { value: 12 },
  { value: 15 },
  { value: 20 },
  { value: 35 },
  { value: 60 },
  { value: 100 },
];
export default function AreaChartComponent() {
  return (
    <div className="w-full h-full  p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8884d8" stopOpacity={0.2} />
              <stop offset="50%" stopColor="#8884d8" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// "use client";

// import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A simple area chart";

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig;

// export function AreaChartComponent() {
//   return (
//     <ChartContainer config={chartConfig}>
//       <AreaChart
//         accessibilityLayer
//         data={chartData}
//         margin={{
//           left: 12,
//           right: 12,
//         }}
//       >
//         <CartesianGrid vertical={false} />
//         <XAxis
//           dataKey="month"
//           tickLine={false}
//           axisLine={false}
//           tickMargin={8}
//           tickFormatter={(value) => value.slice(0, 3)}
//         />
//         <ChartTooltip
//           cursor={false}
//           content={<ChartTooltipContent indicator="line" />}
//         />
//         <Area
//           dataKey="desktop"
//           type="natural"
//           fill="var(--color-desktop)"
//           fillOpacity={0.4}
//           stroke="var(--color-desktop)"
//         />
//       </AreaChart>
//     </ChartContainer>
//   );
// }
