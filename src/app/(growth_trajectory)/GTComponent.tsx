"use client"

import { notFound } from "next/navigation";
import { EngagementRateChart } from "./(home-components)/Charts/EngagementRateChart";
import UserInfo from "./(home-components)/UserInfo";
import { UserProfile } from "@/lib/types";
import { FollowersChartV3 } from "./(home-components)/Charts/FollowersChartV3";
import { useState } from "react";
import { FollowersChartV4 } from "./(home-components)/Charts/FollowersChartV4";
import FAQ from "@/components/FAQ";

export default function GTComponent({
  userProfile,
}: {
  userProfile: UserProfile;
}) {
  const [chartData, setChartData] = useState([]);
  if (!userProfile) {
    return notFound();
  }

  //   const status = (searchParams.status || StatusName.Analytics) as StatusName;

  return (
    <div className="px-4 py-4 sm:py-6">
      <main className="mx-auto max-w-[1250px]">
        <UserInfo userProfile={userProfile} />

        {/* <Settings status={StatusName.Active} /> */}

        <FollowersChartV3
          currentFollowersCount={userProfile.followers || null}
          setChartData={setChartData}
        />

        <div className="h-6"></div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <EngagementRateChart />

          {/* <FollowingChart
            currentFollowingsCount={userProfile.followings || null}
          /> */}
          <FollowersChartV4 innitialChartData={chartData} />
        </div>

<FAQ />
        {/* <Targeting /> */}

        {/* <div className="h-6"></div>

        <Listings /> */}

        {/* <div className="my-6 flex flex-col items-end text-tremor-label leading-relaxed text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
          <p>
            Started tracking on <strong>May 13th, 2024.</strong>
          </p>
          <p>
            Last updated <strong>a few seconds ago.</strong>
          </p>
        </div> */}
      </main>
    </div>
  );
}
