"use client"

import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineBars3, HiOutlineCog6Tooth } from "react-icons/hi2";
import ThemeToggler from "./ThemeToggler";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className=" w-full px-4 py-4 sm:py-6 ">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-8 sm:justify-start">
        <Link href={"/"} className="py-1">
          <Image width={36} height={36} src={"/logo.svg"} alt="Get back home" />
        </Link>

        {/* <div className="flex w-full items-center justify-center gap-10 max-sm:hidden ">
          <NavLink href="/">Dashboard</NavLink>
          <NavLink href="/accounts">Accounts</NavLink>
          <NavLink href="/caption-writer">Caption Writer</NavLink>
        </div> */}

        <div className="flex items-center gap-2 ml-auto">
          {/* <button className="flex items-center gap-2 px-2 py-2 font-medium transition-colors duration-200 ease-in-out bg-white/0 rounded-lg hover:bg-stone-100">
            <HiOutlineBellAlert className="size-6" />
          </button> */}

          {/* Theme Toggler */}
          <ThemeToggler />

          <Button
            // variant="brand"
            // href="https://app.liftinfluence.com/signup"
            onClick={() => {
              const w: any = window;
              w.fathom.trackEvent("Start my Growth");
            }}
          >
            Start Growth Now
          </Button>

          {/* <span className="sm:hidden">
            <MobileMenu />
          </span> */}

          {/* <span className="max-sm:hidden">
            <SettingMenu />
          </span> */}
        </div>
      </nav>
    </div>
  );
}

// function MobileMenu() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg bg-tremor-background px-2 py-2  font-medium transition-colors duration-200 ease-in-out hover:bg-tremor-background-muted dark:bg-dark-tremor-background dark:hover:bg-dark-tremor-background-muted">
//         <span className="sr-only">Open Menu</span>
//         <HiOutlineBars3 className="size-6" />
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         side="bottom"
//         className="-translate-x-8 border-tremor-border bg-tremor-background dark:border-dark-tremor-border dark:bg-dark-tremor-background"
//         // alignOffset={300}
//       >
//         <DropdownMenuItem
//           asChild
//           className="hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle"
//         >
//           <Link
//             href={"/settings"}
//             className="cursor-pointer px-4 py-1 text-sm font-medium text-tremor-content dark:font-normal dark:text-dark-tremor-content-emphasis"
//           >
//             Account settings
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator className="bg-tremor-border dark:bg-dark-tremor-border" />
//         <DropdownMenuItem
//           asChild
//           className="hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle"
//         >
//           <Link
//             href={"/dashboard"}
//             className="cursor-pointer px-4 py-1  text-sm font-medium text-tremor-content dark:font-normal dark:text-dark-tremor-content-emphasis"
//           >
//             Dashboard
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator className="bg-tremor-border dark:bg-dark-tremor-border" />
//         <DropdownMenuItem
//           asChild
//           className="hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle"
//         >
//           <Link
//             href={"/accounts"}
//             className="cursor-pointer px-4 py-1  text-sm font-medium text-tremor-content dark:font-normal dark:text-dark-tremor-content-emphasis"
//           >
//             Accounts
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator className="bg-tremor-border dark:bg-dark-tremor-border" />
//         <DropdownMenuItem
//           asChild
//           className="hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle"
//         >
//           <Link
//             href={"/caption-writer"}
//             className="cursor-pointer px-4 py-1  text-sm font-medium text-tremor-content dark:font-normal dark:text-dark-tremor-content-emphasis"
//           >
//             Caption writer
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator className="bg-tremor-border dark:bg-dark-tremor-border" />
//         <DropdownMenuItem
//           asChild
//           className="hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle"
//         >
//           <Link
//             href={"/login"}
//             className="cursor-pointer px-4 py-1  text-sm font-medium text-tremor-content dark:font-normal dark:text-dark-tremor-content-emphasis"
//           >
//             Sign out
//           </Link>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// function SettingMenu() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="group flex items-center gap-2 rounded-lg bg-white/0 px-2 py-2 font-medium transition-colors duration-200 ease-in-out hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted">
//         <span className="sr-only">Open Menu</span>
//         <HiOutlineCog6Tooth className="size-6 transition-transform duration-200 ease-in-out group-hover:rotate-12 group-hover:scale-110" />
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         side="bottom"
//         className="-translate-x-12 bg-tremor-background dark:bg-dark-tremor-background"
//         // alignOffset={300}
//       >
//         <DropdownMenuItem
//           asChild
//           className="hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle"
//         >
//           <Link
//             href={"/settings"}
//             className="cursor-pointer px-4 py-1 text-sm font-medium text-tremor-content dark:text-dark-tremor-content-emphasis"
//           >
//             Account settings
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem
//           asChild
//           className="hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle"
//         >
//           <Link
//             href={"/login"}
//             className="cursor-pointer px-4 py-1 text-sm font-medium text-tremor-content dark:text-dark-tremor-content-emphasis"
//           >
//             Sign out
//           </Link>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
