"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const navItems = [
  // { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkIsMobile = () => {
  //     setIsMobile(window.innerWidth < 769);
  //   };
  //   checkIsMobile();
  //   window.addEventListener("resize", checkIsMobile);
  //   return () => window.removeEventListener("resize", checkIsMobile);
  // }, []);

  // const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-[1000]">
      <div className="w-full bg-white dark:bg-[#0A0A0A] flex flex-col justify-center items-center">
        <nav className="w-full flex items-center justify-between space-x-4 bg-white dark:bg-[#0A0A0A] shadow-sm dark:shadow-[#343434] p-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-lg font-semibold">funfun.tools</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <ul className="flex items-center space-x-4">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <Button className="bg-pink-500 text-white hover:bg-pink-600 py-[6px] h-fit">
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      className="w-[1.2rem] h-[1.2rem]"
                      fill="currentColor"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="AddCircleRoundedIcon"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1" />
                    </svg>
                  </span>

                  <span className="hidden sm:inline">Submit Tool</span>
                </div>
                <span className="sm:hidden">+</span>
              </Button>

              <ModeToggle />
              {/* <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button> */}
            </div>

            {/* {isMobile && (
            )} */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button> */}
            <div className="flex items-center lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    {/* {isOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                    )} */}
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="mt-[70px]">
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

        {/* <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#0A0A0A] shadow-lg z-50 p-4 lg:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="absolute top-4 right-4"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="flex flex-col space-y-4 mt-16">
                <Button variant="ghost">Menu Item 1</Button>
                <Button variant="ghost">Menu Item 2</Button>
                <Button variant="ghost">Menu Item 3</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </header>
  );
}

// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";

// import { Button } from "@/components/ui/button";

// const navItems = [
//   { title: "Home", href: "/" },
//   { title: "About", href: "/about" },
//   { title: "Services", href: "/services" },
//   { title: "Contact", href: "/contact" },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <header className="sticky top-0 z-[1000] bg-[#FEFEFE]">
//       <nav className="border-b">
//         <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex items-center flex-shrink-0">
//             <Link href="/" className="text-xl font-bold">
//               <svg
//                 className="w-8 h-8 text-primary"
//                 fill="none"
//                 height="24"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 width="24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M12 5.74C16.444 1.33 22.884 7.26 19.65 11.23C17.03 14.49 12 17.49 12 21C12 17.49 6.97 14.49 4.35 11.23C1.115 7.26 7.555 1.33 12 5.74Z" />
//               </svg>
//               <span className="sr-only">Your Company</span>
//             </Link>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.title}
//                 href={item.href}
//                 className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300"
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center sm:hidden">
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="relative">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle navigation menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right">
//                 <nav className="flex flex-col space-y-4 mt-4">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.title}
//                       href={item.href}
//                       className="text-base font-medium text-gray-900 hover:text-gray-700"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
