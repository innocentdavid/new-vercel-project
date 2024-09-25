import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import InteractionSetting from "./InteractionSetting";
import { demoProfile } from "@/lib/demo-data";

export default function UserInfo() {
  return (
    <div className="flex flex-row gap-4 items-end sm:items-center justify-between border-b border-tremor-border dark:border-dark-tremor-border pb-4 mb-4">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <Avatar className="size-12 outline outline-2 outline-offset-2 outline-tremor-border dark:outline-dark-tremor-border">
          <AvatarImage src={demoProfile.profileImage} />
          <AvatarFallback>
            {demoProfile.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {/* Name and Username */}
        <div className="flex flex-col">
          <p className="text-lg font-semibold leading-tight text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {demoProfile.name}
          </p>
          <a
            href="https://www.instagram.com/"
            className="flex gap-1 hover:underline dark:text-dark-tremor-content"
          >
            @{demoProfile.username}{" "}
            <HiArrowTopRightOnSquare className="text-xs translate-y-1.5 opacity-80" />
          </a>
        </div>
      </div>

      <InteractionSetting />
    </div>
  );
}
