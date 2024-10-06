"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({
  children,
  href,
}: {
  children?: ReactNode;
  href: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      data-active={pathname === href}
      className="font-semibold flex gap-1 text-tremor-content-strong dark:text-dark-tremor-content-strong transition-transform duration-200 ease-in-out hover:scale-105"
    >
      {children}
    </Link>
  );
}
