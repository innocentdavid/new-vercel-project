"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];
// import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-[1000] bg-[#FEFEFE]">
      <nav className="border-b">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5.74C16.444 1.33 22.884 7.26 19.65 11.23C17.03 14.49 12 17.49 12 21C12 17.49 6.97 14.49 4.35 11.23C1.115 7.26 7.555 1.33 12 5.74Z" />
              </svg>
              <span className="sr-only">Your Company</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
  //   return (
  //     <header className="sticky top-0 z-[1000] flex flex-col items-center bg-[#FDFDFD] object-fill px-4 lg:h-[90px] lg:px-10 shadow-sm">
  //       <nav className=" z-[999] mx-auto flex w-full items-center justify-between bg-[#FDFDFD] py-1 xl:max-w-[1350px]">
  //         <a className="mr-4 flex flex-none items-center gap-2 py-4" href="/">
  //           <div>
  //             LOGO
  //           </div>
  //           <span className="sr-only">Logo</span>
  //         </a>
  //         <nav className="static hidden h-full w-auto items-center justify-center text-[#858585] lg:flex">
  //           <div className="flex items-center">
  //             <a
  //               className="mx-2 mr-1 flex items-center justify-center p-[28px_12px] px-1 text-left align-top font-medium leading-6 hover:text-green-500"
  //               href="#"
  //             >
  //               AI Social Assistant
  //             </a>
  //             <div className="mr-2 flex items-center justify-center rounded-[6px] border border-[#e8e8e8] bg-[#f4f4f4] px-2 py-1 text-xs font-medium">
  //               <p className="_text-[#5c5c5c] mb-0 w-auto bg-gradient-to-tr from-emerald-500 to-emerald-500/5 bg-clip-text text-left text-sm font-semibold leading-[100%] text-transparent">
  //                 New
  //               </p>
  //             </div>
  //           </div>
  //           <div className="flex items-center">
  //             <a
  //               className="flex items-center justify-center gap-2 px-6 py-[28px] text-left align-top font-medium leading-6 hover:text-green-500"
  //               href="/pricing"
  //             >
  //               Pricing
  //             </a>
  //           </div>
  //           <div className="flex items-center">
  //             <a
  //               className="flex items-center justify-center gap-2 px-3 py-[28px] text-left align-top font-medium leading-6 hover:text-green-500"
  //               href="/reviews"
  //             >
  //               Reviews
  //             </a>
  //           </div>
  //           <div className="group flex items-center">
  //             <div className="group flex cursor-pointer items-center justify-center gap-2 px-6 py-[28px] text-left align-top font-medium leading-6 group-hover:text-green-500">
  //               <span>Resources</span>
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 width={16}
  //                 height={16}
  //                 viewBox="0 0 24 24"
  //                 fill="none"
  //                 stroke="currentColor"
  //                 strokeWidth={3}
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 className="lucide lucide-chevron-up _rotate-180 transition-all delay-100 duration-300 rotate-180 _group-hover:rotate-0"
  //               >
  //                 <path d="m18 15-6-6-6 6" />
  //               </svg>
  //             </div>
  //           </div>
  //         </nav>
  //         <div className="hidden min-h-[50px] items-center justify-end gap-2 lg:flex">
  //           <a
  //             rel="alternate"
  //             hrefLang="en"
  //             href="https://app.gainsty.com/en/signup"
  //           >
  //             <button
  //               type="button"
  //               className="mx-0 h-auto rounded-[8px] border border-[#10B981] bg-[#10B981] p-[6px_24px_7px] text-center font-medium leading-6 text-[whitesmoke] shadow-[3px_3px_4px_rgba(0,0,0,.2)] hover:border-[#10aa81] hover:bg-[#10aa81]"
  //             >
  //               Start Free Trial
  //             </button>
  //           </a>
  //           <a
  //             rel="alternate"
  //             hrefLang="en"
  //             href="https://app.gainsty.com/en/login"
  //           >
  //             <button
  //               type="button"
  //               className="mx-0 h-auto rounded-[8px] border border-[#e8e8e8] bg-white p-[6px_24px_7px] text-center font-medium leading-6 shadow-[3px_3px_4px_rgba(0,0,0,.2)] hover:border-[#10B981] hover:bg-[#10B981] hover:text-[whitesmoke]"
  //             >
  //               Sign In
  //             </button>
  //           </a>
  //         </div>
  //         <div className="flex items-center gap-3 lg:hidden">
  //           <a
  //             rel="alternate"
  //             hrefLang="en"
  //             className="hidden sm:inline-block"
  //             href="https://app.gainsty.com/en/signup"
  //           >
  //             <button
  //               type="button"
  //               className="mx-0 h-auto rounded-[8px] border border-[#10B981] bg-[#10B981] p-[6px_12px_8px] text-center font-medium leading-6 text-[whitesmoke] shadow-[3px_3px_4px_rgba(0,0,0,.2)] hover:border-[#10aa81] hover:bg-[#10aa81]"
  //             >
  //               Start Free Trial
  //             </button>
  //           </a>
  //           <button
  //             type="button"
  //             title="menu"
  //             className="mx-0 h-auto rounded-[8px] border border-[#e8e8e8] bg-white p-2 text-center font-medium leading-6 shadow-[3px_3px_4px_rgba(0,0,0,.06)] hover:text-[whitesmoke] _!text-[#6D7282] text-red-800"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width={20}
  //               height={20}
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               stroke="currentColor"
  //               strokeWidth={3}
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               className="lucide lucide-menu"
  //             >
  //               <line x1={4} x2={20} y1={12} y2={12} />
  //               <line x1={4} x2={20} y1={6} y2={6} />
  //               <line x1={4} x2={20} y1={18} y2={18} />
  //             </svg>
  //           </button>
  //         </div>
  //       </nav>
  //       <nav className="absolute top-full z-10 w-full border-t-2 !bg-[#FDFDFD] transition-all duration-300 h-screen overflow-auto pb-40 lg:hidden _opacity-0 pointer-events-none -left-[1000%] _h-0">
  //         <div className="flex items-center border-b-2 px-4">
  //           <a
  //             className="mr-1 flex w-full items-center p-[28px_12px] px-0 text-left align-top font-medium leading-6 hover:text-green-500"
  //             href="#"
  //           >
  //             AI Social Assistant
  //           </a>
  //           <div className="flex items-center justify-center rounded-[6px] border border-[#e8e8e8] bg-[#f4f4f4] px-2 py-1 text-xs font-medium">
  //             <p className="_text-[#5c5c5c] mb-0 w-auto bg-gradient-to-tr from-emerald-500 to-emerald-500/5 bg-clip-text text-left text-sm font-semibold leading-[100%] text-transparent">
  //               New
  //             </p>
  //           </div>
  //         </div>
  //         <div className="flex items-center border-b-2 px-4">
  //           <a
  //             className="flex w-full items-center gap-2 py-[28px] text-left align-top font-medium leading-6 hover:text-green-500"
  //             href="/pricing"
  //           >
  //             Pricing
  //           </a>
  //         </div>
  //         <div className="flex items-center border-b-2 px-4">
  //           <a
  //             className="flex w-full items-center gap-2 py-[28px] text-left align-top font-medium leading-6 hover:text-green-500"
  //             href="/reviews"
  //           >
  //             Reviews
  //           </a>
  //         </div>
  //         <div className="group relative border-b-2">
  //           <div className="group flex w-full cursor-pointer items-center justify-between gap-2 px-4 py-[28px] text-left align-top font-medium leading-6 group-hover:text-green-500">
  //             <span>Resources</span>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width={16}
  //               height={16}
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               stroke="currentColor"
  //               strokeWidth={3}
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               className="lucide lucide-chevron-up _rotate-180 transition-all delay-100 duration-300 rotate-180 _group-hover:rotate-0"
  //             >
  //               <path d="m18 15-6-6-6 6" />
  //             </svg>
  //           </div>
  //         </div>
  //         {/* <div className="flex items-center border-b-2 px-4">
  //           <a
  //             rel="alternate"
  //             hrefLang="en"
  //             className="flex w-full items-center gap-2 py-[28px] text-left align-top font-medium leading-6 hover:text-green-500"
  //             href="https://app.gainsty.com/en/login"
  //           >
  //             Sign In
  //           </a>
  //         </div>
  //         <div className="mt-8 px-4">
  //           <a
  //             rel="alternate"
  //             hrefLang="en"
  //             href="https://app.gainsty.com/en/signup"
  //           >
  //             <button
  //               type="button"
  //               className="h-auto w-full rounded-[8px] border border-[#10B981] bg-[#10B981] p-[14px_40px] text-center font-medium leading-6 text-[whitesmoke] shadow-[3px_3px_4px_rgba(0,0,0,.2)] hover:border-[#10aa81] hover:bg-[#10aa81]"
  //             >
  //               Start Free Trial
  //             </button>
  //           </a>
  //         </div> */}
  //       </nav>
  //     </header>
  //   );
}
