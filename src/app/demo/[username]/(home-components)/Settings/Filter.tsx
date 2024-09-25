"use client";

import { MagicSlider } from "@/components/ui/MagicSlider";
import { Slider } from "@/components/ui/Slider";
import { NumberInput } from "@tremor/react";
import { useState } from "react";

export default function Filter({
  label,
  min = 0,
  max = 100,
  variant = "default",
}: {
  label: string;
  min?: number;
  max?: number;
  variant?: "default" | "magic";
}) {
  const [value, setValue] = useState(0);

  const isMagic = variant === "magic";

  return (
    <div className="flex items-center w-full gap-3">
      <div className="flex flex-col w-full ">
        <label
          htmlFor={label + "-filter"}
          className={
            "text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong mb-1"
          }
        >
          {label}
        </label>

        {!isMagic ? (
          <Slider
            id={label + "-filter"}
            value={[value]}
            onValueChange={(values: number[]) => setValue(values[0])}
            max={max}
            min={min}
          />
        ) : (
          <MagicSlider
            id={label + "-filter"}
            value={[value]}
            onValueChange={(values: number[]) => setValue(values[0])}
            max={max}
            min={min}
          />
        )}

        <div className="flex justify-between items-center text-tremor-label mt-1">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
      <NumberInput
        className="max-w-5"
        value={value}
        onValueChange={setValue}
        max={max}
        min={min}
      />
    </div>
  );
}
