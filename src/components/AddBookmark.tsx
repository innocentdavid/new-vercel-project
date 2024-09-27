"use client";

import React, { ReactNode } from "react";
import { toast } from "react-toastify";

export default function AddBookmark({ children }: { children: ReactNode }) {
  return (
    <div
    className="grid place-items-center"
      onClick={() => {
        toast.warning("Please login to add to bookmark");
      }}
    >
      {children}
    </div>
  );
}
