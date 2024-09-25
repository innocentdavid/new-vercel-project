"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/button";

import ContainerCard from "@/components/ui/ContainerCard";
import { PLANS, PRICINGS, Pricing as PricingCardProps } from "@/lib/dummy-data";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Subscription({
  cancelled = false,
  title,
  description,
}: {
  cancelled?: boolean;
  title: string;
  description: ReactNode;
}) {
  const [selectedPlan, setSelectedPlan] = useState(1);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="grid sm:flex sm:flex-col">
        <h1 className="mt-4 max-w-prose text-center text-2xl font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong max-sm:mx-auto sm:text-start sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-prose text-center text-tremor-default leading-6 max-sm:mx-auto sm:text-start">
          {description}
        </p>
        <div className="h-6"></div>
        <div className="flex items-center gap-2 max-sm:row-start-1 max-sm:flex-col sm:mb-6">
          {/* Avatar */}
          <Avatar className="size-12 outline outline-2 outline-offset-2 outline-tremor-border dark:outline-dark-tremor-border">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Name and Username */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold leading-tight text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Shadcn
            </p>
            <span className="flex gap-1 hover:underline dark:text-dark-tremor-content">
              @shadcn
            </span>
          </div>
        </div>
        <PlanCard
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />
        <div className="h-6"></div>
        <Button>
          {cancelled ? "Resubscribe" : "Subscribe"}
        </Button>
      </div>
      <ContainerCard>
        <PricingCard {...PRICINGS[selectedPlan]} />
      </ContainerCard>
      {/* <div className="h-6"></div> */}
    </div>
  );
}

function PlanCard({
  selectedPlan,
  setSelectedPlan,
}: {
  selectedPlan: number;
  setSelectedPlan: Dispatch<SetStateAction<number>>;
}) {
  return (
    <ContainerCard>
      <div className="flex items-center justify-between gap-4">
        {PLANS.map((plan, i) => (
          <button
            onClick={() => setSelectedPlan(i)}
            key={i}
            className={twMerge(
              "relative flex w-full items-center justify-center gap-2 rounded-lg px-1 py-3 font-semibold transition-opacity duration-200 ease-in-out",
              i === selectedPlan
                ? "text-tremor-content-inverted"
                : "text-tremor-content-subtle hover:bg-tremor-background-muted dark:text-dark-tremor-content-emphasis  dark:hover:bg-dark-tremor-background-subtle",
            )}
          >
            <span className="relative z-10">{plan}</span>
            {i === selectedPlan && (
              <motion.span
                layoutId="plan-tab"
                className="absolute inset-0 rounded-lg  bg-primary "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                }}
              ></motion.span>
            )}
          </button>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between gap-4 text-center">
        <p className="w-full text-tremor-label font-medium text-tremor-content">
          $99 / mo
        </p>
        <p className="w-full text-tremor-label font-medium text-tremor-content">
          $149 / mo
        </p>
        <p className="w-full text-tremor-label font-medium text-tremor-content">
          $239 / mo
        </p>
      </div>
    </ContainerCard>
  );
}

function PricingCard(props: PricingCardProps) {
  const { name, description, price, popular = false, features } = props;
  return (
    <div className={"p-0 " + (popular ? "border-none" : " ")}>
      <div className="text-start text-tremor-content dark:text-dark-tremor-content-emphasis">
        <div className="flex items-baseline justify-between gap-x-4">
          <h2
            id="product2"
            className="text-2xl font-bold leading-8 text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            {name}
            {/* Lift your Instagram */}
          </h2>
          {popular ? (
            <p className="flex-none rounded-full bg-primary px-2.5 py-1 text-xs text-tremor-content-inverted dark:text-dark-tremor-content-strong">
              Most popular
            </p>
          ) : null}
        </div>

        <p className="mt-6 flex flex-col items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight text-tremor-content-strong dark:text-dark-tremor-content-strong">
            ${price} / mo
          </span>
          <span className="text-xs font-semibold ">
            Billed monthly, Cancel anytime.
          </span>
        </p>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6  xl:mt-10">
          {features.map((feature, i) => (
            <li key={i} className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-5 flex-none text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
