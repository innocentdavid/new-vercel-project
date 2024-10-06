"use client";

import { Select, SelectItem, TextInput } from "@tremor/react";

export default function AdditionalInfo({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
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

        <Select id={label + "-filter"}>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
