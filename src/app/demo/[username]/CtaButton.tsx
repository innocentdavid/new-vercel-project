"use client"

import { PiArrowRightBold } from "react-icons/pi";

export default function CtaButton() {
  return (
    <a
      href="https://app.liftinfluence.com/signup"
      onClick={() => {
        const w: any = window;
        w.fathom.trackEvent("Start my Growth");
      }}
      className="px-6 py-3 justify-between hover:opacity-85 transition-opacity ease-in-out duration-200 bg-primary rounded-lg flex items-center gap-2 text-white font-semibold"
    >
      <span>Start My Growth</span>
      <PiArrowRightBold />
    </a>
  );
}
