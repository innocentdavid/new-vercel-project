import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/InputOTP";
import { TextInput } from "@tremor/react";
import { ReactNode } from "react";
import { FiLoader, FiVideo } from "react-icons/fi";
import { HiVideoCamera } from "react-icons/hi2";
import { PiVideo } from "react-icons/pi";
import Subscription from "./Subscription";
import { Button } from "@/components/ui/button";

export enum StatusColor {
  Red = "red",
  Green = "green",
  Yellow = "yellow",
}

export enum StatusName {
  New = "New",
  Checking = "Checking",
  TwoFactor = "TwoFactor",
  Incorrect = "Incorrect",
  Pending = "Pending",
  Active = "Active",
  Cancelled = "Cancelled",
  Analytics = "Analytics",
}

export type Status = {
  name: StatusName;
  badge: {
    color: StatusColor;
    text: string;
  };
  banner: {
    color: StatusColor;
  };

  title?: string;
  description?: ReactNode;
  autoShow?: boolean;
  expandPopup?: boolean;
  popupContent?: ReactNode;
};

export const STATUSES: Status[] = [
  {
    name: StatusName.New,
    badge: {
      color: StatusColor.Yellow,
      text: "In progress",
    },
    banner: {
      color: StatusColor.Yellow,
    },
    title: "Your account will be connected shortly",
    description:
      "The account is in process to get logged in. This may take a few minutes depending on our system load.",
    popupContent: (
      <div>
        {" "}
        <Button disabled>
          Logging in <FiLoader className="animate-spin" />
        </Button>
      </div>
    ),
  },
  {
    name: StatusName.Checking,
    badge: {
      color: StatusColor.Red,
      text: "Approval required",
    },
    banner: {
      color: StatusColor.Red,
    },
    title: "Action is required",
    description:
      "In order for our system to connect to your account, you must approve our login request in the notifications tab on Instagram. Simply click “This was me” and your account will be connected shortly.",
    popupContent: (
      <div className="">
        <Button variant="outline">
          <FiVideo className="text-primary" /> How to confirm my login request?
        </Button>
      </div>
    ),
  },
  {
    name: StatusName.TwoFactor,
    badge: {
      color: StatusColor.Red,
      text: "Two factor auth enabled",
    },
    banner: {
      color: StatusColor.Red,
    },
    title: "Two factor authentication enabled",
    description:
      "Two factor authentication is currently enabled for your account. In order to log in directly to your Instagram account, please provide us with a backup code",
    popupContent: (
      <div className="flex flex-col">
        <label
          htmlFor="backup-code"
          className="mb-2 text-center text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
        >
          Enter backup code
        </label>
        <div className="flex justify-center">
          <InputOTP maxLength={8} id="backup-code" className="w-full">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator className="max-sm:hidden" />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <p className="mt-1 text-center text-tremor-label">
          Please enter the one-time password sent to your email.
        </p>
        <div className="h-4"></div>
        <Button>Confirm</Button>
        <div className="h-2"></div>
        <Button variant="outline">
          <FiVideo className="text-primary" /> Where do I find my backup codes?
        </Button>
      </div>
    ),
  },
  {
    name: StatusName.Incorrect,
    badge: {
      color: StatusColor.Red,
      text: "Incorrect password",
    },
    banner: {
      color: StatusColor.Red,
    },
    title: "Your Instagram password is incorrect",
    description:
      "The password for your Instagram account is incorrect. Please try again by inputting your correct Instagram password.",
    popupContent: (
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-2 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong"
        >
          Password
        </label>

        <TextInput type="password" placeholder="Enter your password" />

        <div className="h-4"></div>
        <Button>Continue</Button>
        <div className="h-2"></div>
        <Button variant="outline">
          <FiVideo className="text-primary" /> How to change my password?
        </Button>
      </div>
    ),
  },
  {
    name: StatusName.Pending,
    badge: {
      color: StatusColor.Red,
      text: "Connect your account",
    },
    banner: {
      color: StatusColor.Red,
    },
    title: "Connect your Instagram account",
    description:
      "Your account is currently not connected to our growth system. To get started, please connect your account now. This account is currently pending.",
    popupContent: (
      <div className="">
        <label
          htmlFor="password"
          className="mb-2 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong"
        >
          Password
        </label>

        <TextInput type="password" placeholder="Enter your password" />

        <div className="h-4"></div>
        <Button>Continue</Button>
        <div className="h-2"></div>
        <Button variant="outline">
          <FiVideo className="text-primary" /> How to confirm my login request
        </Button>
      </div>
    ),
  },
  {
    name: StatusName.Active,
    badge: {
      color: StatusColor.Green,
      text: "Connected",
    },
    banner: {
      color: StatusColor.Green,
    },
    title: undefined,
    description: undefined,
  },
  {
    name: StatusName.Cancelled,
    badge: {
      color: StatusColor.Red,
      text: "Upgrade your subscription",
    },
    banner: {
      color: StatusColor.Red,
    },
    title: "Subscription expired",
    description:
      "Your subscription has expired on ((date)). Upgrade your account to access the full potential Instagram growth.",
    autoShow: true,
    expandPopup: true,
    popupContent: (
      <Subscription
        cancelled
        title="Subscription expired"
        description="Your subscription has expired on ((date)). Upgrade your account to access the full potential Instagram growth."
      />
    ),
  },
  {
    name: StatusName.Analytics,
    badge: {
      color: StatusColor.Red,
      text: "Upgrade for growth",
    },
    banner: {
      color: StatusColor.Yellow,
    },
    title: "Upgrade to grow your Instagram",
    description:
      "You are currently using a free analytics version of LiftInfluence. Upgrade your account to start growing your Instagram followers and engagement.",
    autoShow: true,
    expandPopup: true,
    popupContent: (
      <Subscription
        title="Upgrade to grow your Instagram"
        description="You are currently using a free analytics version of LiftInfluence. Upgrade your account to start growing your Instagram followers and engagement."
      />
    ),
  },
];
