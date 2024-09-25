"use client";

import { Badge, SearchSelect, SearchSelectItem } from "@tremor/react";
import { ReactNode, useState } from "react";
import {
  PiArrowRight,
  PiCheckBold,
  PiPlusBold,
  PiXCircleFill,
} from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { TARGETED_ACCOUNTS } from "@/lib/dummy-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import BlueCheckMark from "@/components/ui/BlueCheckMark";
import { twMerge } from "tailwind-merge";

export default function MobileAddListForm({
  variant = "white",
}: {
  variant?: "white" | "black";
}) {
  const [targets, setTargets] = useState<string[]>([]);
  const [currentSelection, setCurrentSelection] = useState<string>("");
  const [open, setOpen] = useState(false);

  const isWhite = variant === "white";

  const addTarget = (target: string) => {
    if (target && !targets.includes(target)) {
      setTargets([...targets, target]);
      //   setCurrentSelection("");
    }
  };

  const removeTarget = (target: string) => {
    setTargets(targets.filter((t) => t !== target));
  };

  return (
    <>
      {/* Toggle Button */}

      <AddButton
        onClick={() => setOpen(!open)}
        className="mb-4 group w-full px-6 py-3 justify-between border border-stone-200  hover:opacity-85 transition-opacity ease-in-out duration-200 text-tremor-content-strong dark:text-dark-tremor-content-strong dark:bg-tremor-content-strong bg-dark-tremor-content-strong rounded-lg flex items-center gap-2 font-semibold"
      >
        <span>{isWhite ? <>Add Whitelist</> : <>Add Blacklist</>}</span>
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <PiArrowRight />
        </motion.div>
      </AddButton>

      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold flex items-center gap-2">
              {isWhite ? (
                <>Add Whitelist Accounts</>
              ) : (
                <>Add Blacklist Accounts</>
              )}
            </h3>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-6">
              {isWhite ? (
                <>
                  Add users you wish to continue followingthat were followed by
                  LiftInfluence. We will never unfollow anyone you manually
                  followed.s.
                </>
              ) : (
                <>
                  Blacklist users that you would not like to interact with and
                  we won
                  {"'"}t follow them when growing your account.
                </>
              )}
            </p>
            <div className="flex flex-col">
              <div className="relative mb-2">
                <SearchSelect
                  placeholder="@username"
                  onValueChange={addTarget}
                  enableClear
                  value={currentSelection}
                  searchValue={currentSelection}
                  onSearchValueChange={setCurrentSelection}
                  suppressHydrationWarning
                >
                  {TARGETED_ACCOUNTS.slice(0, isWhite ? 3 : 1).map(
                    (account, i) => (
                      <SearchSelectItem
                        key={i}
                        value={account.username}
                        suppressHydrationWarning
                      >
                        <span className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold flex items-center gap-2">
                          <span className="relative">
                            <Avatar className="size-4 relative">
                              <AvatarImage src={account.avatarUrl} />

                              <AvatarFallback>
                                {account.username
                                  .split(" ")
                                  .map((s) => s[0].toUpperCase())}
                              </AvatarFallback>
                            </Avatar>
                            {account.verified ? (
                              <BlueCheckMark className="absolute -bottom-1 -right-1 size-3 " />
                            ) : null}
                          </span>
                          <span>{account.username}</span>
                        </span>
                      </SearchSelectItem>
                    )
                  )}
                </SearchSelect>
              </div>

              {/* Added targets */}
              <div className="flex flex-wrap gap-1 mb-6">
                {targets.length > 0
                  ? targets.map((target, i) => (
                      <Badge key={i}>
                        {target}
                        <button
                          className="inline-flex items-end ml-1"
                          onClick={() => removeTarget(target)}
                        >
                          <PiXCircleFill className="text-red-500" />
                          <span className="sr-only">remove {target}</span>
                        </button>
                      </Badge>
                    ))
                  : null}
              </div>

              <div className="flex flex-col gap-2">
                <AddButton>
                  {targets.length > 0 ? (
                    <>
                      <PiCheckBold />
                      <span>Confirm ({targets.length})</span>
                    </>
                  ) : (
                    <>
                      <PiPlusBold />
                      <span>
                        {isWhite ? (
                          <>Whitelist Account</>
                        ) : (
                          <>Blacklist Account</>
                        )}
                      </span>
                    </>
                  )}
                </AddButton>
                {/* <AIButton /> */}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function AddButton({
  children,
  onClick,
  className = "",
}: {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "px-6 py-3 w-full justify-center hover:opacity-85 transition-opacity ease-in-out duration-200 dark:text-tremor-content-strong text-dark-tremor-content-strong bg-tremor-content-strong dark:bg-dark-tremor-background-emphasis rounded-lg flex items-center gap-2 font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
}
