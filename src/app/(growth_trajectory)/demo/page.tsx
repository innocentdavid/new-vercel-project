// import Targeting from "./(home-components)/Targeting";
// import Listings from "./(home-components)/Listings";
// import Alert from "./Alert";
import { demoProfile } from "@/lib/demo-data";
import { UserProfile } from "@/lib/types";
import { notFound } from "next/navigation";
import getUserProfileData from "@/lib/profile-data";
import GTComponent from "../GTComponent";

async function getUserProfile() {
  return demoProfile;
}

export default async function Demo() {
  const userProfile = await getUserProfile();

  if (!userProfile) {
    return notFound();
  }

  //   const status = (searchParams.status || StatusName.Analytics) as StatusName;

  return <GTComponent userProfile={userProfile} />;
}
