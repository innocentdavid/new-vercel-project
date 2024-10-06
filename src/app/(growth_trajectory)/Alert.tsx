import { Callout } from "@tremor/react";
import { PiWarningFill } from "react-icons/pi";
import {
  Status as StatusProps,
  StatusColor,
  StatusName,
  STATUSES,
} from "./(home-components)/Settings/statusData";

export default function Alert({ status }: { status: StatusName }) {
  const { badge, title, description, banner } =
    STATUSES.find((s) => s.name === status) ?? STATUSES[STATUSES.length - 1];

  const calloutDotColor = {
    [StatusColor.Red]:
      "border-red-500  bg-red-200 text-red-500 dark:bg-red-400",
    [StatusColor.Yellow]:
      "border-amber-500  bg-amber-200 text-amber-500 dark:bg-amber-400",
    [StatusColor.Green]:
      "border-green-500  bg-green-200 text-green-500 dark:bg-green-400",
  };

  if (!title) return null;

  return (
    <div className="mb-6 w-full">
      <Callout
        title={title}
        color={banner.color}
        icon={PiWarningFill}
        className={calloutDotColor[banner.color]}
      >
        {description}
      </Callout>
    </div>
  );
}
