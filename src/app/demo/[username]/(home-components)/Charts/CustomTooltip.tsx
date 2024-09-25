import { CustomTooltipProps } from "@tremor/react";

export const CustomTooltip = (props: CustomTooltipProps) => {
  const { payload, active } = props;
  if (!active || !payload) return null;
  console.log(payload[0]);
  return (
    <div className="w-56 rounded-tremor-default border border-tremor-border dark:border-dark-tremor-border bg-tremor-background dark:bg-dark-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="text-tremor-content dark:text-dark-tremor-content">
              {category.payload.date}
            </p>
            <p className="font-medium text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
              {category.value} {category.dataKey}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
