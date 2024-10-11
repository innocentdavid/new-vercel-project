import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PlaceholdersAndVanishInputDemo } from "./PlaceholdersAndVanishInputDemo";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="grid place-items-center">
      <div className="max-w-[900px] mx-auto px-8">
        <h2 className="text-2xl leading-3 md:leading-[1.1] relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Discover The Best{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Instagram Followers</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Instagram Followers</span>
            </div>
          </div>{" "}
          Growth Tools in 2024
        </h2>

        <p className="mb-8 !leading-8 text-gray-600 max-md:mx-auto max-w-[600px] mx-auto sm:text-lg text-center">
        See which Instagram growth tool is real with our unfiltered reviews and get the best deals from the most trusted Instagram followers growth services.
        </p>

        <PlaceholdersAndVanishInputDemo />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
