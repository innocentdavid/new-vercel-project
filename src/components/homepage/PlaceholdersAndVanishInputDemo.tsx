"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export function PlaceholdersAndVanishInputDemo() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [processing, setProcessing] = useState(false);

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    setProcessing(true);
    router.push(`/growth/${value.startsWith("@") ? value.substring(1) : value}`);
    setTimeout(() => {
      setProcessing(false);
    }, 2000);
  };
  return (
    <div className="max-h-[40rem] flex flex-col justify-center  items-center px-4">
      {processing && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-[999999999] grid place-items-center text-white">
          <Loader2 className="animate-spin" />
        </div>
      )}
      {/* <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2> */}
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
