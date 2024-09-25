"use client";

// import { Dialog, DialogPanel } from "@tremor/react";
import { useEffect, useState } from "react";
import { PiCircleFill, PiX } from "react-icons/pi";
import { Status as StatusProps, StatusColor } from "./statusData";
import { twMerge } from "tailwind-merge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export default function Status({
  name,
  badge,
  autoShow,
  description,
  title,
  popupContent,
  expandPopup,
}: StatusProps) {
  const [isOpen, setIsOpen] = useState(false);

  const badgeDotColor = {
    [StatusColor.Red]: {
      main: "text-red-500",
      pulse: "text-red-500/50",
    },
    [StatusColor.Green]: {
      main: "text-green-500",
      pulse: "text-green-500/50",
    },
    [StatusColor.Yellow]: {
      main: "text-amber-500",
      pulse: "text-amber-500/50",
    },
  };

  useEffect(() => {
    if (autoShow) {
      setTimeout(() => {
        setIsOpen(true);
      }, 5000);
    }
  }, [autoShow]);

  //   console.log(badgeDotColor[badge.color]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={
          "flex flex-none items-center gap-2 rounded-lg border border-tremor-border  bg-white/0 px-2  py-1.5 text-tremor-label font-medium transition-colors duration-200 ease-in-out dark:border-dark-tremor-border " +
          "pointer-events-none"
        }
      >
        <span className="relative">
          <PiCircleFill
            className={twMerge(
              "relative size-2.5 animate-ping ",
              badgeDotColor[badge.color].pulse
            )}
          />
          <PiCircleFill
            className={twMerge(
              "absolute inset-0 size-2.5 ",
              badgeDotColor[badge.color].main
            )}
          />
        </span>
        {badge.text}
      </button>
      {/* Dialog here */}
    </>
  );
}

// Disabled
// {title || description ? (
//   <Dialog
//     open={isOpen}
//     onClose={(val) => setIsOpen(val)}
//     static={true}
//     className={
//       " " +
//       (expandPopup
//         ? "[&>div]:bg-white [&>div]:dark:bg-dark-tremor-background"
//         : "")
//     }
//   >
//     <DialogPanel
//       className={"relative " + (expandPopup ? "max-w-4xl ring-0" : "")}
//     >
//       {/* Close button */}
//       <button
//         onClick={() => setIsOpen(false)}
//         className="absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-tremor-background px-2 py-2  font-medium transition-colors duration-200 ease-in-out hover:bg-tremor-background-muted dark:bg-dark-tremor-background dark:hover:bg-dark-tremor-background-muted"
//       >
//         <span className="sr-only">Close Modal</span>
//         <PiX className="size-6" />
//       </button>

//       {expandPopup ? <div className="h-6"></div> : null}

//       {expandPopup ? null : (
//         <>
//           <div className="mt-2 flex flex-col items-center gap-2">
//             {/* Avatar */}
//             <Avatar className="size-12 outline outline-2 outline-offset-2 outline-tremor-border dark:outline-dark-tremor-border">
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>

//             {/* Name and Username */}
//             <div className="flex flex-col">
//               <p className="text-lg font-semibold leading-tight text-tremor-content-strong dark:text-dark-tremor-content-strong">
//                 Shadcn
//               </p>
//               <span className="flex gap-1 hover:underline dark:text-dark-tremor-content">
//                 @shadcn
//               </span>
//             </div>
//           </div>
//           <h1 className="mx-auto mt-4 max-w-prose text-center text-2xl font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong sm:text-3xl">
//             {title}
//           </h1>
//           <p className="mx-auto mt-2 max-w-prose text-center text-tremor-default leading-6">
//             {description}
//           </p>
//         </>
//       )}
//       {popupContent ? <div className="h-6"></div> : null}
//       {popupContent}
//     </DialogPanel>
//   </Dialog>
// ) : null}
