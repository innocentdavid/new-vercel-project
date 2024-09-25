"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const MagicSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-red-200 dark:bg-red-300">
      <SliderPrimitive.Range className="absolute h-full bg-red-500 _dark:bg-dark-tremor-content-strong" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 bg-red-500 _dark:bg-dark-tremor-content-strong ring-offset-tremor-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tremor-content-strong focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark-tremor-border  dark:ring-offset-dark-tremor-content-strong dark:focus-visible:ring-dark-tremor-content-strong" />
  </SliderPrimitive.Root>
));

MagicSlider.displayName = "MagicSlider";

export { MagicSlider };
