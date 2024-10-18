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
    "Write your Instagram Username",
    "@therock",
    "https://www.instagram.com/therock",
    "therock",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    setProcessing(true);
  
    // Normalize the input value
    let username = value.trim();
  
    // Handle inputs starting with '@'
    if (username.startsWith('@')) {
      username = username.substring(1);
    }
  
    // Handle inputs with Instagram URLs
    if (username.startsWith('https://www.instagram.com/')) {
      username = username.replace('https://www.instagram.com/', '').split('/')[0];
    }

    if (username.startsWith('https://instagram.com/')) {
      username = username.replace('https://instagram.com/', '').split('/')[0];
    }
  
    // Ensure the username is clean before redirecting
    router.push(`/growth/${username}`);
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
