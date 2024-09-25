import { ReactNode } from "react";
import {
  PiCreditCard,
  PiAppleLogoFill,
  PiGoogleLogoBold,
} from "react-icons/pi";

export type Account = {
  username: string;
  followers: string;
  followings: string;
  media: string;
  addedDate: string;
  avatarUrl: string;
  verified?: boolean;
};

export const TARGETED_ACCOUNTS: Account[] = [
  {
    username: "@framer",
    followers: "56.0K",
    followings: "430",
    media: "129",
    addedDate: "recently",
    avatarUrl:
      "https://dgzughwvyggtmphiusas.supabase.co/storage/v1/object/public/profilePictures/framer.jpg",
    verified: true,
  },
  {
    username: "@figma",
    followers: "636.4K",
    followings: "178",
    media: "213",
    addedDate: "yesterday",
    avatarUrl:
      "https://dgzughwvyggtmphiusas.supabase.co/storage/v1/object/public/profilePictures/figma.jpg",
  },
  {
    username: "@wiseaccount",
    followers: "312.5K",
    followings: "30",
    media: "145",
    addedDate: "may 14",
    avatarUrl:
      "https://dgzughwvyggtmphiusas.supabase.co/storage/v1/object/public/profilePictures/wiseaccount.jpg",
  },
];

export const PAYMENTS = [
  {
    name: "Card",
    icon: <PiCreditCard className="size-6" />,
  },
  {
    name: "Apple Pay",
    icon: <PiAppleLogoFill className="size-6" />,
  },
  {
    name: "Google Pay",
    icon: <PiGoogleLogoBold className="size-6" />,
  },
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const YEARS = [
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
  "2033",
];

export const PLANS = ["Standard", "Turbo", "Rocket"];

export const PRICINGS: Pricing[] = [
  {
    name: "Standard",
    description: (
      <span>
        A good starting point for personal accounts and businesses looking for{" "}
        <strong>organic growth</strong>
      </span>
    ),
    price: "99",
    features: [
      "Real Followers Growth",
      "Engagement Increase",
      "Following, Liking",
      "Supported by Innovative AI",
      "Fully Customized Targeting",
      "Real-time Analytics",
      "Quick Setup",
      "100% Safe & Secure",
      "Email Support",
    ],
  },
  {
    popular: true,
    name: "Turbo",
    description: (
      <span>
        Level up your Instagram with{" "}
        <strong>100% more results and visibility</strong> compared to Standard
      </span>
    ),
    price: "149",
    features: [
      <span key={0} className="font-semibold">
        All from Standard
      </span>,
      "2X Real Followers Growth",
      "2X Engagement Increase",
      "Story Interactions",
      "Like after Follow",
      "Monthly Profile Audits",
      "Welcome DM Automation",
      "Instant Setup",
      "24/7 WhatsApp & Email Support",
    ],
  },
  {
    name: "Rocket",
    description: (
      <span>
        Supercharge your growth and get the most out of your audience. Get
        everything from Turbo + <strong>even more exposure.</strong>
      </span>
    ),
    price: "239",
    features: [
      <span key={0} className="font-semibold">
        All from Turbo
      </span>,
      "3X Real Followers Growth",
      "3X Engagement Increase",
      "AI Engagement Algorithm",
      "Weekly Profile Audits",
      "Profile Optimization",
      "Direct Message Outreach",
      "Unlimited AI Caption Generation",
      "Dedicated Account Manager",
    ],
  },
];

export type Pricing = {
  name: string;
  description: ReactNode;
  price: string;
  popular?: boolean;
  features: ReactNode[];
};
