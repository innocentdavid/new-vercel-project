"use client";

import { Fragment } from "react";
import { PiArrowsDownUp, PiLock, PiTrash } from "react-icons/pi";
import AddTargetForm from "./AddTargetForm";
import MobileAddTargetForm from "./MobileAddTargetForm";
import { TARGETED_ACCOUNTS } from "@/lib/dummy-data";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { demoTargets } from "@/lib/demo-data";
import minimizeNumber from "@/lib/minimize-number";
import BlueCheckMark from "@/components/ui/BlueCheckMark";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/button";

export default function Targeting({ blured = false }: { blured?: boolean }) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-xl border border-tremor-border p-4 dark:border-dark-tremor-border sm:p-6">
        {/* Blur */}
        {blured ? (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-tremor-background/60 text-tremor-content-strong backdrop-blur dark:bg-dark-tremor-background/60 dark:text-dark-tremor-content-strong">
            <HiOutlineLockClosed className="-mb-2 text-6xl" />
            <p className="text-tremor-title font-bold ">
              Upgrade your plan to grow your account.
            </p>
            <Button>
              Upgrade
            </Button>
          </div>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-5 sm:gap-8">
          <div className="sm:col-span-3">
            <div className="grid grid-cols-[1.5fr_0.5fr_0.25fr] items-center gap-4 sm:grid-cols-[1.5fr_0.5fr_0.5fr_0.25fr]">
              {/* Head */}
              <div className="flex items-center gap-1 text-tremor-default ">
                <span>Account</span>{" "}
                <button>
                  <PiArrowsDownUp />
                </button>
              </div>
              <div className="text-tremor-default ">Followers</div>
              <div className="text-tremor-default max-sm:hidden ">Added</div>
              <div className="text-tremor-default ">Action</div>
              {/* Body */}
              {demoTargets.map((account, i) => (
                <Fragment key={i}>
                  <div className="flex items-center  gap-2 text-tremor-default dark:text-tremor-content-subtle">
                    <span className="relative">
                      <Avatar className="relative size-8">
                        <AvatarImage src={account.avatarUrl} />
                        <AvatarFallback>
                          {account.name
                            .replace("@", "")
                            .split(" ")
                            .map((s) => s[0].toUpperCase())}
                        </AvatarFallback>
                      </Avatar>
                      {account.verified ? (
                        <BlueCheckMark className="absolute -bottom-1 -right-1 size-5 " />
                      ) : null}
                    </span>
                    <span>{account.username}</span>
                  </div>
                  <div className="text-tremor-default dark:text-tremor-content-subtle ">
                    {minimizeNumber(account.followers)}
                  </div>
                  <div className="text-tremor-default dark:text-tremor-content-subtle max-sm:hidden ">
                    {account.addedDate}
                  </div>
                  <div className="">
                    <button
                      onClick={() => console.log("delete " + account.username)}
                      className="flex items-center gap-2 rounded-lg bg-white/0 px-2 py-2 font-semibold text-red-600 transition-colors duration-200 ease-in-out hover:bg-red-100 dark:hover:bg-red-400/20"
                    >
                      <PiTrash />
                      <span className="sr-only">Delete {account.username}</span>
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="max-sm:hidden sm:col-span-2 pointer-events-none">
            <AddTargetForm />
          </div>
          <div className="sm:hidden pointer-events-none">
            <MobileAddTargetForm />
          </div>
        </div>
      </div>
    </div>
  );
}
