"use client";

import { handleCopy } from "@/lib/helpers";
import React, { ReactNode } from "react";

export default function CopyComp({
  children,
  str,
}: {
  children: ReactNode;
  str: string;
}) {
  return <div onClick={() => handleCopy(str)}>{children}</div>;
}
