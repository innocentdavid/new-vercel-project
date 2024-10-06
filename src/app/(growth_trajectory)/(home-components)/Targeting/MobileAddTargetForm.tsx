"use client";

import { Badge, SearchSelect, SearchSelectItem } from "@tremor/react";
import { ReactNode, useState } from "react";
import {
  PiArrowRight,
  PiCheckBold,
  PiPlusBold,
  PiSparkleFill,
  PiXCircleFill,
} from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { TARGETED_ACCOUNTS } from "@/lib/dummy-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { twMerge } from "tailwind-merge";
import BlueCheckMark from "@/components/ui/BlueCheckMark";

export default function MobileAddTargetForm() {
  const [targets, setTargets] = useState<string[]>([]);
  const [currentSelection, setCurrentSelection] = useState<string>("");
  const [open, setOpen] = useState(false);

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
        className="group mb-4 flex w-full items-center justify-between gap-2 rounded-lg  border border-stone-200 bg-dark-tremor-content-strong px-6 py-3 font-semibold text-tremor-content-strong transition-opacity duration-200 ease-in-out hover:opacity-85 dark:bg-tremor-content-strong dark:text-dark-tremor-content-strong"
      >
        <span>Add Targeting</span>
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
            <h3 className="flex items-center gap-2 text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Add Targeting
            </h3>
            <p className="mb-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Set up your targeting preferences by adding the usernames of
              competitors or similar accounts to the field below.
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
                  {TARGETED_ACCOUNTS.map((account, i) => (
                    <SearchSelectItem
                      key={i}
                      value={account.username}
                      suppressHydrationWarning
                    >
                      <span className="flex items-center gap-2 text-tremor-default font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        <span className="relative">
                          <Avatar className="relative size-4">
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
                  ))}
                </SearchSelect>
              </div>

              {/* Added targets */}
              <div className="mb-6 flex flex-wrap gap-1">
                {targets.length > 0
                  ? targets.map((target, i) => (
                      <Badge key={i}>
                        {target}
                        <button
                          className="ml-1 inline-flex items-end"
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
                      <span>Add Target</span>
                    </>
                  )}
                </AddButton>
                <AIButton />
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
        "flex w-full items-center justify-center gap-2 rounded-lg bg-tremor-content-strong px-6 py-3 font-semibold text-dark-tremor-content-strong transition-opacity duration-200 ease-in-out hover:opacity-85 dark:bg-dark-tremor-background-emphasis dark:text-tremor-content-strong",
        className,
      )}
    >
      {children}
    </button>
  );
}

function AIButton() {
  return (
    <button className="group flex items-center justify-center gap-2 rounded-lg  border border-stone-200 bg-dark-tremor-content-strong px-6 py-3 font-semibold text-tremor-content-strong transition-opacity duration-200 ease-in-out hover:opacity-85 dark:bg-dark-tremor-background dark:text-dark-tremor-content-emphasis">
      <PiSparkleFill className="text-amber-500 transition-transform duration-200 ease-in-out group-hover:-rotate-6 group-hover:scale-110" />{" "}
      Add targets with AI
    </button>
  );
}
