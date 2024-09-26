"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const navItems = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000]">
      <div className="w-full bg-white dark:bg-[#0A0A0A] flex flex-col justify-center items-center">
        <nav className="w-full flex items-center justify-between space-x-4 bg-white dark:bg-[#0A0A0A] shadow-sm dark:shadow-[#343434] p-4">
          <Link href={`/`} className="flex items-center space-x-4">
            <div className="">
              <Image
                src="/followerstoolblack.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full_ hidden dark:inline-block"
              />
              <Image
                src="/followerstoolwhite.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full_ dark:hidden"
              />
            </div>
            <span className="text-lg font-semibold">FollowersTool</span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <ul className="flex items-center space-x-4">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} prefetch>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={`/submit-tool`}>
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
              </Link>

              <ModeToggle />
            </div>
            <div className="flex items-center lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
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
                        className="text-base font-medium _text-gray-900 _hover:text-gray-700"
                        onClick={() => setIsOpen(false)}
                        prefetch={false}
                      >
                        {item.title}
                      </Link>
                    ))}
                    <Link href={`/submit-tool`}>
                      <Button className="bg-pink-500 text-white hover:bg-pink-600 py-[6px] h-fit w-fit lg:w-full">
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

                          <span className="hidden lg:inline">Submit Tool</span>
                        </div>
                      </Button>
                    </Link>

                    <ModeToggle />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
