"use client";

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Oops, it looks like the page you're looking for has moved.",
};

export default function NotFound() {
  return (
    <div>
      <div className="mx-auto w-full px-4 text-center bg-white p-16 pb-32 h-screen">
        <div className="flex justify-center hue-rotate-[210deg]">
          <Image src={"/404_1x.png"} alt="" width={300} height={400} />
        </div>

        <h2 className="text-3xl font-bold">Not Found</h2>
        <p className="mb-8 mt-3 text-lg font-semibold">
          Oops, it looks like the page you're looking for has moved.
        </p>
        <Link href="/" className="max-w-[200px] mx-auto">
          <button
            type="button"
            className="_bg-gradient-3 flex h-auto w-fit mx-auto items-center justify-center gap-2 rounded-[8px] border border-[#EC4899] bg-[#EC4899] px-12 py-[14px] text-center font-medium leading-6 text-[whitesmoke] shadow-[3px_3px_4px_rgba(0,0,0,.12)] hover:border-[#EC4899] hover:bg-[#EC4899] md:px-[120px]"
          >
            <span className="">Back to Home</span>
          </button>
        </Link>
      </div>

      {/* <Footer /> */}
    </div>
    // </NextIntlClientProvider>
  );
}
