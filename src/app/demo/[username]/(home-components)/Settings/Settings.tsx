import {
  PiCircleFill,
  PiSlidersHorizontal,
  PiWhatsappLogo,
} from "react-icons/pi";
import DurationSettingMenu from "./DurationSettingMenu";
import { Suspense } from "react";
import TargetingFilter from "./TargetingFilter";
import Status from "./Status";
import { STATUSES, StatusName } from "./statusData";

export default function Settings({ status }: { status: StatusName }) {
  const statusItem =
    STATUSES.find((s) => s.name === status) ?? STATUSES[STATUSES.length - 1];

  return (
    <div className="mb-6 flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4 ">
        <Status {...statusItem} />

        <div className="flex items-center gap-4">
          <Suspense>
            <span className="max-sm:hidden">
              <DurationSettingMenu />
            </span>
          </Suspense>
          <TargetingFilter />

          <a
            href="https://wa.me/message/NQHPFCGYZWAXJ1"
            target="_blank"
            className="flex items-center gap-2 rounded-lg bg-white/0 px-2 py-2  ring-1 ring-tremor-content transition-colors duration-200 ease-in-out hover:bg-tremor-background-muted dark:ring-dark-tremor-content dark:hover:bg-dark-tremor-background-muted"
          >
            <span className="sr-only">Message us on WhatsApp</span>
            <PiWhatsappLogo />
          </a>
        </div>
      </div>
      <Suspense>
        <span className="w-full sm:hidden">
          <DurationSettingMenu />
        </span>
      </Suspense>
    </div>
  );
}
