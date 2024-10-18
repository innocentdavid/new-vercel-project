"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { FollowersGrowthChart } from "./followers-growth-chart";
import { DailyChangeChart } from "./daily-change-chart";
import { OverviewCard } from "./overview-card";
import { FAQ } from "./faq";
import { UserProfile } from "@/lib/types";
import { ChartData } from "../../(home-components)/Charts/FollowersChartV3";
import minimizeNumber from "@/lib/minimize-number";
import ProfileOptimization from "./profile-optimization";
import Image from "next/image";
import { Check, Copy } from "lucide-react";
import copy from "copy-to-clipboard";

const followersDataGeneratorV2 = (
  currentFollowersCount: number | null = null,
  range: "daily" | "weekly" | "monthly" = "monthly"
) => {
  let totalPeriods;
  let interval;
  let growthRange;

  switch (range) {
    case "daily":
      totalPeriods = 12;
      interval = 1;
      growthRange = { min: 30, max: 40 };
      break;
    case "weekly":
      totalPeriods = 12;
      interval = 7;
      growthRange = { min: 250 * 7, max: 325 * 7 };
      break;
    case "monthly":
      totalPeriods = 12;
      interval = 30;
      growthRange = { min: 1000 * 12, max: 1300 * 12 };
      break;
    default:
      totalPeriods = 12;
      interval = 30;
      growthRange = { min: 1000 * 12, max: 1300 * 12 };
  }

  const data = [];
  let startDate, endDate;
  let startingFollowersCount, endingFollowersCount;
  let startingNormalCount, endingNormalCount;
  const isPastData = !currentFollowersCount;

  if (isPastData) {
    // Generate past data
    endDate = new Date();
    startDate = new Date();
    startDate.setDate(startDate.getDate() - totalPeriods * interval);

    // Use default values for past data
    startingFollowersCount = 915883;
    endingFollowersCount = 938517;
    startingNormalCount = 915883;
    endingNormalCount = 938517 * 0.6; // Lower the endingNormalCount to create more distinction
  } else {
    // Generate future data
    startDate = new Date();
    endDate = new Date();
    endDate.setDate(endDate.getDate() + totalPeriods * interval);

    // Calculate target followers increase
    const targetFollowersIncrease =
      Math.floor(Math.random() * (growthRange.max - growthRange.min + 1)) +
      growthRange.min;

    // Set starting and ending counts for future data
    startingFollowersCount = currentFollowersCount;
    endingFollowersCount = currentFollowersCount + targetFollowersIncrease;
    startingNormalCount = currentFollowersCount;
    if (range === "daily") {
      endingNormalCount = currentFollowersCount + targetFollowersIncrease * 0.3; // Lower the growth for Normal for daily
    } else {
      endingNormalCount = currentFollowersCount + targetFollowersIncrease * 0.5; // Lower the growth for Normal for other ranges
    }
  }

  const totalDays = Math.round(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  for (
    let date = new Date(startDate.getTime());
    date <= endDate;
    date.setDate(date.getDate() + interval)
  ) {
    const dateStr = date.toISOString().split("T")[0]; // Full date in YYYY-MM-DD format

    let timeDifferenceInDays;
    if (isPastData) {
      timeDifferenceInDays = Math.round(
        (endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      );
    } else {
      timeDifferenceInDays = Math.round(
        (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
    }

    const progression = (timeDifferenceInDays / totalDays) ** 1.05;

    // Calculate Followers
    const followers = Math.round(
      startingFollowersCount +
        (endingFollowersCount - startingFollowersCount) * progression
    );

    // Calculate Normal (slower growth)
    // console.log({startingNormalCount, endingNormalCount, progression});

    const normal = Math.round(
      startingNormalCount -
        0.2 * startingNormalCount +
        (endingNormalCount - startingNormalCount) * progression
    );

    // console.log("normal");
    // console.log(normal);

    // Ensure Followers > Normal
    const finalNormal = normal < followers ? normal : followers - 5; // Increase the gap between Followers and Normal

    data.push({ date: dateStr, Followers: followers, Normal: finalNormal });
  }

  return data;
};

export const tickFormatter = (
  value: number | string,
  range: "daily" | "weekly" | "monthly"
) => {
  const date = new Date(value);
  if (range === "daily") {
    return new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  } else if (range === "weekly") {
    const weekStart = new Date(value);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    return `${new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
    }).format(weekStart)} - ${new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
    }).format(weekEnd)}`;
  } else if (range === "monthly") {
    return new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
  } else {
    return "";
  }
};

const ratesDataGenerator = () => {
  const startDate = new Date(Date.now() - 20 * 24 * 60 * 60 * 1000);
  const endDate = new Date();
  const data = [];

  for (
    let date = new Date(startDate.getTime());
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dateStr = new Intl.DateTimeFormat("en-US", {
      month: "numeric",
      day: "numeric",
    }).format(date);

    const timeDifferenceInDays =
      (endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    let rate =
      5.4 +
      ((5.1 - 5.4) * (timeDifferenceInDays / 30) ** (1 / 3)) /
        (1 + (timeDifferenceInDays / 30) ** (1 / 3));

    if (data.length === 0) {
      rate = 5.1;
    }
    if (data.length === 1) {
      rate = 5.15;
    }

    data.push({ date: dateStr, "%": Number(rate.toFixed(2)) });
  }

  return data;
};

export type Faq = { question: string; answer: string };

export default function InstagramDashboard({
  user,
  Faqs,
}: {
  user: UserProfile;
  Faqs: Faq[];
}) {
  const [activeTab, setActiveTab] = useState<"daily" | "weekly" | "monthly">(
    "monthly"
  );
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [peekChartData, setPeekChartData] = useState<ChartData[]>([]);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    copy("FFDGV72MDA");
    navigator.clipboard.writeText("FFDGV72MDA").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const data = followersDataGeneratorV2(user.followers, "weekly");
    setChartData(
      data.map((d) => {
        const date = tickFormatter(d.date, "weekly");
        return { ...d, date };
      })
    );
  }, [user]);

  useEffect(() => {
    const data = followersDataGeneratorV2(user.followers, activeTab);
    setPeekChartData(data);
  }, [activeTab, user]);

  const dailyChartData = ratesDataGenerator();

  return (
    <div className="space-y-4 mx-4 sm:mx-6 lg:mx-8 pt-6">
      <Card className="bg-white dark:bg-[#0A0F0F]">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full animate-spin"></div>
                <Avatar className="h-16 w-16 border-4 border-white dark:border-primary-500 relative">
                  <AvatarImage src={user.profileImage} alt={"User"} />
                  <AvatarFallback className="uppercase">
                    {user?.username
                      ? user.username
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                      : "N/A"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h2 className="text-2xl font-bold">@{user.username} 👋</h2>
                <p className="text-sm text-gray-500">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="text-center">
                <p className="font-semibold">
                  {new Intl.NumberFormat("en-US").format(Number(user.posts))}
                </p>
                <p className="text-gray-500">Posts</p>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="font-semibold">
                  {minimizeNumber(user.followers || 0)}
                </p>
                <p className="text-gray-500">Followers</p>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="font-semibold">
                  {minimizeNumber(user.followings || 0)}
                </p>
                <p className="text-gray-500">Following</p>
              </div>
            </div>
            {/* <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <button
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 py-[11px] _bg-white dark:!bg-primary-500 border dark:border-transparent border-white border-opacity-25 shadow hover:opacity-60 transition-opacity duration-200 ease-in-out"
                style={{
                  borderRadius: "9px",
                  background:
                    "linear-gradient(180deg, rgba(223, 225, 231, 0.00) 0%, rgba(223, 225, 231, 0.05) 100%), var(--Neutral-0, #FFF)",
                  boxShadow:
                    "rgba(225, 226, 228, 0.56) 0px 0px 0px 1px, rgba(119, 124, 133, 0.12) 0px 1px 2px 0px",
                }}
              >
                <svg
                  className="transition-transform group-hover:-rotate-12 w-[1.1rem] h-[1.1rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-sm font-medium leading-tight text-center text-gray-900 dark:text-white">
                  Upgrade Plan
                </span>
              </button>
              <button
                className="w-full sm:w-auto flex items-center group justify-center gap-2 px-[18px] py-[11px] hover:opacity-90 transition-opacity duration-200 ease-in-out"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "9px",
                  background:
                    "var(--Gradients-Primary-Primary-Button, linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(135deg, #7549F4 2.88%, #FCA6E9 100%))",
                  boxShadow:
                    "rgba(47, 10, 154, 0.4) 0px 1px 2px, rgba(255, 255, 255, 0.4) 0px 0px 0px 1px inset",
                  border: "1px solid rgba(110, 63, 243, 0.4)",
                  filter: "saturate(1.15)",
                }}
              >
                <svg
                  className="w-[1.1rem] h-[1.1rem] text-white transition-transform group-hover:-rotate-12"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#F3F4F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
                    stroke="#F3F4F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium leading-tight text-white text-center text-shadow">
                  Start Growth
                </span>
              </button>
            </div> */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <button
                onClick={copyToClipboard}
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 py-[11px] bg-white border border-white border-opacity-25 shadow hover:opacity-60 transition-opacity duration-200 ease-in-out"
                style={{
                  borderRadius: "9px",
                  border: "1px solid var(--Gradients-White-Stroke, #FFF)",
                  background:
                    "linear-gradient(180deg, rgba(223, 225, 231, 0.00) 0%, rgba(223, 225, 231, 0.05) 100%), var(--Neutral-0, #FFF)",
                  boxShadow:
                    "rgba(225, 226, 228, 0.56) 0px 0px 0px 1px, rgba(119, 124, 133, 0.12) 0px 1px 2px 0px",
                }}
              >
                {copied ? (
                  <Check className="w-[1.1rem] h-[1.1rem]" />
                ) : (
                  <Copy className="w-[1.1rem] h-[1.1rem]" />
                )}
                <span className="text-sm font-medium leading-tight text-center text-gray-900">
                  {copied ? "Copied!" : "Copy Coupon"}
                </span>
              </button>
              <a
                href="https://gainsty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center group justify-center gap-2 px-[18px] py-[11px] hover:opacity-90 transition-opacity duration-200 ease-in-out"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "9px",
                  background:
                    "linear-gradient(135deg, #00C853 0%, #00C853 70%, #2196F3 100%)",
                  boxShadow:
                    "rgba(76, 175, 80, 0.4) 0px 1px 2px, rgba(255, 255, 255, 0.4) 0px 0px 0px 1px inset",
                  border: "1px solid rgba(76, 175, 80, 0.4)",
                  filter: "saturate(1.15)",
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gainsty-1-ZWbTUK9mEwERBwf6unAjo4E35UXXV5.png"
                  alt="Gainsty Logo"
                  width={24}
                  height={24}
                  className="w-[1.1rem] h-[1.1rem]"
                />
                <span className="text-sm font-medium leading-tight text-white text-center text-shadow">
                  Start Growth
                </span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <FollowersGrowthChart chartData={chartData} />

      <div className="grid grid-cols-1 gap-0 mt-3 sm:grid-cols-3 lg:gap-6">
        <DailyChangeChart
        // activeTab={activeTab}
        // setActiveTab={setActiveTab}
        // chartData={peekChartData}
        chartData={dailyChartData}
        />

        <OverviewCard chartData={chartData} />
      </div>

      <ProfileOptimization user={user} />

      <FAQ faqs={Faqs} />
    </div>
  );
}
