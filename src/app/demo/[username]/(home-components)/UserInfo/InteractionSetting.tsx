"use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
// import { Dialog, DialogPanel, Select, SelectItem } from "@tremor/react";
import { ReactNode, useState } from "react";
// import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import {
  PiLightningFill,
  // PiPowerFill,
  // PiUserMinusFill,
  // PiUserPlus,
  // PiUserPlusFill,
  PiX,
} from "react-icons/pi";

export default function InteractionSetting() {
  const [isOpen, setIsOpen] = useState(false);

  // const [selectedMode, setSelectedMode] = useState("auto");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={
          "flex items-center py-1.5 px-2 gap-2 text-tremor-label  border border-tremor-border  dark:border-dark-tremor-border font-medium transition-colors duration-200 ease-in-out rounded-lg " +
          "pointer-events-none"
        }
      >
        <PiLightningFill className="text-amber-500" />
        Auto Mode
      </button>
      {/* Dialog Here */}
    </>
  );
}

// const MODES = [
//   {
//     label: "Auto Mode",
//     value: "auto",
//     icon: <PiLightningFill className="text-amber-500" />,
//   },
//   {
//     label: "Follow Mode",
//     value: "follow",
//     icon: <PiUserPlusFill className="text-green-500" />,
//   },
//   {
//     label: "Unfollow Mode",
//     value: "unfollow",
//     icon: <PiUserMinusFill className="text-blue-500" />,
//   },
//   {
//     label: "Off Mode",
//     value: "off",
//     icon: <PiPowerFill className="text-red-500" />,
//   },
// ];

// const MODE_DESCRIPTIONS = {
//   auto: "This setting will follow and unfollow relevant users using the targets you have selected. We will automatically unfollow users after 3 days to keep your following number low and healthy. We will never unfollow anyone that you manually followed yourself.",
//   follow:
//     "In ‘Follow Mode,’ your account will continue following users until it reaches Instagram's maximum ‘Following’ limit (which is 7500). From there, interactions on our end will stop and you will have to manually change your interaction settings to continue experiencing results (to either ‘Recommended’ or ‘Unfollow Mode’)",
//   unfollow:
//     "In ‘Unfollow Mode,’ your account will unfollow all of the users we automatically followed for you. This will not unfollow users that you personally followed, before or after joining us. If you want to unfollow every account, please contact your account manager.",
//   off: "In ‘off Mode,’ your account will off all of the users we automatically followed for you. This will not off users that you personally followed, before or after joining us. If you want to off every account, please contact your account manager.",
// };

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
//       className="px-6 py-3 justify-center hover:opacity-85 transition-opacity ease-in-out duration-200 dark:text-tremor-content-strong text-dark-tremor-content-strong bg-tremor-content-strong dark:bg-dark-tremor-background-emphasis rounded-lg flex items-center gap-2 font-semibold"
//     >
//       {children}
//     </button>
//   );
// }

// <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
//         <DialogPanel className="relative max-w-3xl">
//           {/* Close button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 right-4 flex items-center gap-2 px-2 py-2 bg-tremor-background dark:bg-dark-tremor-background  font-medium transition-colors duration-200 ease-in-out rounded-lg hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted"
//           >
//             <span className="sr-only">Close Modal</span>
//             <PiX className="size-6" />
//           </button>
//           <h1 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
//             Interaction Setting
//           </h1>

//           <div className="grid sm:grid-cols-2 gap-4 mt-6">
//             {/* User Info */}
//             <div className="flex items-start gap-4">
//               {/* Avatar */}
//               <Avatar className="size-12 outline outline-2 outline-offset-2 outline-tremor-border dark:outline-dark-tremor-border">
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>

//               {/* Name and Username */}
//               <div className="flex flex-col">
//                 <p className="text-lg font-semibold leading-tight text-tremor-content-strong dark:text-dark-tremor-content-strong">
//                   Shadcn
//                 </p>
//                 <a href="/" className="flex gap-1 hover:underline">
//                   @shadcn{" "}
//                   <HiArrowTopRightOnSquare className="text-xs translate-y-1.5 opacity-80" />
//                 </a>
//                 {/* Current Mode */}
//                 {/* <div className="mt-2 flex items-center py-1.5 px-2 gap-2 text-tremor-label  border border-tremor-border  dark:border-dark-tremor-border font-medium transition-colors duration-200 ease-in-out rounded-lg ">
//                   <PiLightningFill className="text-amber-500" />
//                   Auto Mode
//                 </div> */}
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 justify-between">
//               <div className="flex flex-col w-full ">
//                 <label
//                   htmlFor={"mode"}
//                   className={
//                     "text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong mb-1"
//                   }
//                 >
//                   Select Mode
//                 </label>
//                 <Select
//                   value={selectedMode}
//                   onValueChange={setSelectedMode}
//                   suppressHydrationWarning
//                 >
//                   {MODES.map((mode) => (
//                     <SelectItem
//                       key={mode.value}
//                       value={mode.value}
//                       suppressHydrationWarning
//                     >
//                       <span className="flex items-center gap-2 cursor-pointer">
//                         {mode.icon} {mode.label}
//                       </span>
//                     </SelectItem>
//                   ))}
//                 </Select>
//               </div>

//               <p className="text-tremor-default mb-3">
//                 {
//                   MODE_DESCRIPTIONS[
//                     selectedMode as keyof typeof MODE_DESCRIPTIONS
//                   ]
//                 }
//               </p>
//               <SaveButton onClick={() => setIsOpen(false)}>
//                 Apply and Close
//               </SaveButton>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
