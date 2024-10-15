import getUserProfileData from "@/lib/profile-data";
import { UserProfile } from "@/lib/types";
import { notFound } from "next/navigation";
import React from "react";
import GTComponent from "../../GTComponent";
import { Metadata, ResolvingMetadata } from "next";
import InstagramDashboard from "./instagram-dashboard";

function decodeURLString(encodedString: string) {
  try {
    return decodeURIComponent(encodedString);
  } catch (e) {
    console.error("Error decoding URL string:", e);
    return encodedString; // Return the original string if decoding fails
  }
}

async function getUserProfile(username: string) {
  try {
    const data = await getUserProfileData(username);
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

export async function generateMetadata(
  { params }: { params: { username: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const username = decodeURLString(params.username);
  // const userProfile = await getUserProfile(username);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Growth | FollowersTool`,
    alternates: {
      canonical: `https://www.followTool.com/growth/${username}`,
    },
    // openGraph: {
    //   images: [article?.seo_image_url!, ...previousImages],
    // },
  };
}

export default async function GrowthPage({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username;
  const userProfile = await getUserProfile(username);

  if (!userProfile) {
    return notFound();
  }

  return (
    <div className="bg-white_">
      <InstagramDashboard />
      <GTComponent userProfile={userProfile} />
    </div>
  );
}
