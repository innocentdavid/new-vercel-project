import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import InteractionSetting from "./InteractionSetting";
import { UserProfile } from "@/lib/types";
import minimizeNumber from "@/lib/minimize-number";
import Link from "next/link";

function getNext30Days() {
  const currentDate = new Date();
  const next30DaysDate = new Date(currentDate);
  next30DaysDate.setDate(currentDate.getDate() + 30);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formattedCurrentDate = formatDate(currentDate);
  const formattedNext30DaysDate = formatDate(next30DaysDate);

  return `${formattedCurrentDate} - ${formattedNext30DaysDate}`;
}

export default function UserInfo({
  userProfile,
}: {
  userProfile: UserProfile;
}) {
  return (
    <div className="flex flex-row gap-4 items-end sm:items-center justify-between px-1 py-4 mb-6 rounded-xl border border-tremor-border dark:border-dark-tremor-border">
      <div className="flex items-center gap-4 px-4">
        <Avatar className="size-12 outline outline-2 outline-offset-2 outline-tremor-border dark:outline-dark-tremor-border">
          <AvatarImage src={userProfile.profileImage} />
          {userProfile?.name && (
            <AvatarFallback>
              {userProfile?.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>

        <div className="flex flex-col">
          <p className="text-lg font-semibold leading-tight text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {userProfile.name}
          </p>
          <Link
            href={`https://www.instagram.com/${userProfile.username}`}
            className="flex gap-1 hover:underline dark:text-dark-tremor-content"
            target="_blank"
          >
            @{userProfile.username}{" "}
            <HiArrowTopRightOnSquare className="text-xs translate-y-1.5 opacity-80" />
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="border-x px-4 flex items-center w-full">
          <div className="px-6">
            <div className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              {minimizeNumber(userProfile.followers || 0)}
            </div>
            <div className="mt-2 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Followers
            </div>
          </div>
          <div className="px-6">
            <div className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              {minimizeNumber(userProfile.followings || 0)}
            </div>
            <div className="mt-2 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Followings
            </div>
          </div>
          {/* <div className="px-6">
            <div className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              3.1M
            </div>
            <div className="mt-2 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Followers
            </div>
          </div> */}
        </div>

        <div className="px-4 flex items-center gap-12 w-full">
          <div className="pl-10 whitespace-nowrap">{getNext30Days()}</div>
          <Link href={`https://app.gainsty.com`} target="_blank">
            <button
              type="button"
              className="whitespace-nowrap py-2 px-4 rounded-lg bg-primary-500 text-white"
            >
              Start My Growth
            </button>
          </Link>
        </div>
        {/* <InteractionSetting /> */}
      </div>
    </div>
  );
}
