"use client";

import {
  Button,
  // Dialog, DialogPanel, NumberInput
} from "@tremor/react";
import { ReactNode, useState } from "react";
import {
  PiSlidersHorizontal,
  //  PiSparkleFill, PiX
} from "react-icons/pi";
// import Filter from "./Filter";
// import AdditionalInfo from "./AdditionalInfo";

export default function TargetingFilter() {
  const [isOpen, setIsOpen] = useState(false);

  const [magicFilter, setMagicFilter] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={
          "flex items-center gap-2 rounded-lg border-none bg-tremor-background bg-white/0 px-2 py-2 text-tremor-content ring-1 ring-tremor-content  transition-colors duration-200 ease-in-out hover:bg-tremor-background-muted dark:bg-dark-tremor-background dark:text-dark-tremor-content-emphasis dark:ring-dark-tremor-content dark:hover:bg-dark-tremor-background-muted " +
          "pointer-events-none"
        }
        tooltip="Targeting Filters"
      >
        <span className="sr-only">Targeting Filters</span>
        <PiSlidersHorizontal />
      </Button>
      {/* Dialog Here */}
    </>
  );
}

// function SaveButton({
//   children,
//   onClick,
// }: {
//   children?: ReactNode;
//   onClick?: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center gap-2 rounded-lg bg-tremor-content-strong px-6 py-3 font-semibold text-dark-tremor-content-strong transition-opacity duration-200 ease-in-out hover:opacity-85 dark:bg-dark-tremor-background-emphasis dark:text-tremor-content-strong"
//     >
//       {children}
//     </button>
//   );
// }

// function MagicFilterButton({
//   on = false,
//   onClick,
// }: {
//   on?: boolean;
//   onClick?: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       data-magic={on}
//       className="group flex items-center justify-center gap-2 rounded-lg border  border-stone-200 bg-dark-tremor-content-strong px-6 py-3 font-semibold text-tremor-content-strong transition-opacity duration-200 ease-in-out hover:opacity-85 data-[magic=true]:border-red-500 dark:bg-dark-tremor-background dark:text-dark-tremor-content-emphasis"
//     >
//       <PiSparkleFill className="text-amber-500 transition-transform duration-200 ease-in-out group-hover:-rotate-6 group-hover:scale-110" />{" "}
//       Magic Filter: {on ? "On" : "Off"}
//     </button>
//   );
// }

// <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
// <DialogPanel className="relative max-w-3xl">
// {/* Close button */}
// <button
//   onClick={() => setIsOpen(false)}
//   className="absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-tremor-background px-2 py-2  font-medium transition-colors duration-200 ease-in-out hover:bg-tremor-background-muted dark:bg-dark-tremor-background dark:hover:bg-dark-tremor-background-muted"
// >
//   <span className="sr-only">Close Modal</span>
//   <PiX className="size-6" />
// </button>
// <h1 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
//   Targeting Filters
// </h1>
// <p className="mt-2 text-tremor-default leading-6 ">
//   Here, you can specify preferences for your ideal follower. Before we
//   follow or like a target, we{"’"}ll ensure it meets your criteria.
//   You can set limits based on the number of followers and followings a
//   user has, their number of posts, whether account is private or
//   public, their gender and language.
// </p>

// <div className="mt-6 grid gap-4 sm:grid-cols-2">
//   {/* Input Filter */}
//   <div className="flex flex-col justify-between gap-3">
//     {/* Followers */}
//     <Filter
//       label="Followers"
//       variant={magicFilter ? "magic" : "default"}
//       max={10e5}
//     />
//     {/* Followings */}
//     <Filter
//       label="Followings"
//       variant={magicFilter ? "magic" : "default"}
//       max={7.5 * 10e3}
//     />
//     {/* Media */}
//     <Filter
//       label="Media"
//       variant={magicFilter ? "magic" : "default"}
//       max={5 * 10e3}
//     />

//     <MagicFilterButton
//       on={magicFilter}
//       onClick={() => setMagicFilter(!magicFilter)}
//     />
//   </div>

//   {/* Additional Info */}
//   <div className="flex flex-col gap-3">
//     <AdditionalInfo
//       label="Privacy"
//       options={["all", "public", "private"]}
//     />
//     <AdditionalInfo
//       label="Gender"
//       options={["all", "female", "male"]}
//     />
//     <AdditionalInfo
//       label="Language"
//       options={["all", "english", "french"]}
//     />
//     <div className="h-2"></div>
//     <SaveButton onClick={() => setIsOpen(false)}>
//       Save and Close
//     </SaveButton>
//   </div>
// </div>
// </DialogPanel>
// </Dialog>
