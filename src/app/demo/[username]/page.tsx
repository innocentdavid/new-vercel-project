// import Targeting from "./(home-components)/Targeting";
// import Listings from "./(home-components)/Listings";
// import Alert from "./Alert";
import { FollowersChart } from "./(home-components)/Charts/FollowersChart";
import { FollowingChart } from "./(home-components)/Charts/FollowingChart";
import { EngagementRateChart } from "./(home-components)/Charts/EngagementRateChart";
import Settings from "./(home-components)/Settings";
import UserInfo from "./(home-components)/UserInfo";
import { StatusName } from "./(home-components)/Settings/statusData";
import { demoProfile } from "@/lib/demo-data";
import axios from "axios";
import { UserProfile } from "@/lib/types";
import { notFound } from "next/navigation";

async function getUserProfile(username: string) {
  if (username === "katharinefoster") {
    return demoProfile;
  }
  
  try {
    const url = `http://localhost:3000/api/profile-data`;
    const res = await axios.get<{
      data: {
        username: string;
        full_name: string;
        profile_pic_url: string;
        biography: string;
        follower_count: number;
        following_count: number;
        media_count: number;
      };
    }>(url, {
      params: { username: encodeURIComponent(username) },
    });

    const data = res.data.data;

    console.log("res.data");
    console.log(res.data);
    
    const userProfile: UserProfile = {
      name: data.full_name,
      username,
      profileImage: data.profile_pic_url,
      followers: data.follower_count,
      followings: data.following_count,
    };

    return userProfile;
  } catch (error) {
    return null;
  }
}

export default async function Demo({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username;
  const userProfile = await getUserProfile(username);

  if (!userProfile) {
    return notFound();
  }

  //   const status = (searchParams.status || StatusName.Analytics) as StatusName;

  return (
    <div className="px-4 py-4 sm:py-6">
      <main className="mx-auto max-w-4xl">
        <UserInfo userProfile={userProfile} />

        <Settings status={StatusName.Active} />

        <FollowersChart currentFollowersCount={userProfile.followers || null} />

        <div className="h-6"></div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <FollowingChart
            currentFollowingsCount={userProfile.followings || null}
          />

          <EngagementRateChart />
        </div>

        {/* <Targeting /> */}

        {/* <div className="h-6"></div>

        <Listings /> */}

        <div className="my-6 flex flex-col items-end text-tremor-label leading-relaxed text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
          <p>
            Started tracking on <strong>May 13th, 2024.</strong>
          </p>
          <p>
            Last updated <strong>a few seconds ago.</strong>
          </p>
        </div>
      </main>
    </div>
  );
}
