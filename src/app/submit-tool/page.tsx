/* eslint-disable react/no-unescaped-entities */
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SubmitToolPage() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8 mt-[76px] w-full mb-20">
      <div className="lg:col-span-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <section className="py-6">
            <div className="px-6 max-w-7xl lg:px-8">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold tracking-tight dark:text-gray-50">
                  Advertising on Uneed
                </h1>
              </div>
              <p className="max-w-3xl mt-4 text-xl leading-8 text-gray-600 dark:text-gray-400">
                Boost your presence and reach tens of thousands of potential
                customers 🤩
              </p>
              <p className="max-w-3xl mt-4">
                {" "}
                Submitting your product is free, but you have to go through our
                waiting line.{" "}
                <a href="/how-it-works" className="underline">
                  Click here
                </a>{" "}
                to learn more about how it works.{" "}
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-8 px-6 mx-auto mt-8 max-w-7xl lg:px-8 isolate lg:mx-0 xl:grid-cols-3 md:grid-cols-2">
              <div className="relative hidden col-span-3 rounded-lg shadow bg-sand-500 dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 xl:flex">
                <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="py-10 text-center bg-sand-400 dark:bg-gray-700 rounded-2xl ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="max-w-xs px-8 mx-auto">
                      <p className="text-base font-semibold text-gray-600 dark:text-gray-400">
                        {" "}
                        Pay once, generate traffic and try to win a life-time
                        backlink.{" "}
                      </p>
                      <p className="flex items-baseline justify-center mt-6 gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                          $30
                        </span>
                      </p>
                      <button
                        type="button"
                        className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 dark:disabled:bg-primary-400 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 disabled:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center mt-10"
                      >
                        Skip the waiting line
                      </button>
                    </div>
                    <a
                      href="/advertising/skip-the-waiting-line"
                      className="mt-2 text-sm italic hover:underline"
                    >
                      More details{" "}
                    </a>
                  </div>
                </div>
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Skip the waiting line
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
                    Launch your product on Uneed the day you want{" "}
                  </p>
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-4 mt-8 text-sm text-gray-600 dark:text-gray-400 sm:grid-cols-2 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <span
                        className="iconify i-ph:check-circle-duotone flex-none w-5 h-6 text-primary-600"
                        aria-hidden="true"
                        style={{}}
                      />{" "}
                      Skip the waiting line and launch your product when you
                      want{" "}
                    </li>
                    <li className="flex gap-x-3">
                      <span
                        className="iconify i-ph:check-circle-duotone flex-none w-5 h-6 text-primary-600"
                        aria-hidden="true"
                        style={{}}
                      />{" "}
                      If you're in the first 3 products, you win a special badge
                      + a mention in our newsletter (6.5K subs) and social media{" "}
                    </li>
                    <li className="flex gap-x-3">
                      <span
                        className="iconify i-ph:check-circle-duotone flex-none w-5 h-6 text-primary-600"
                        aria-hidden="true"
                        style={{}}
                      />{" "}
                      Your product stays on Uneed forever and earn a lifetime
                      dofollow backlink, no matter your launch's results{" "}
                    </li>
                    <li className="flex gap-x-3">
                      <span
                        className="iconify i-ph:check-circle-duotone flex-none w-5 h-6 text-[#FF6CA8]"
                        aria-hidden="true"
                        style={{}}
                      />{" "}
                      30% lifetime discount off the premium Testimonial Donut
                      plan{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-sand-500 dark:bg-gray-800 relative flex flex-col self-stretch w-full col-span-1 xl:hidden">
                <div className="flex-1 flex flex-col gap-y-6 sm:p-6 p-8 xl:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">
                        Skip the waiting line
                      </p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                      Launch your product the day you want
                    </p>
                  </div>
                  <div className="flex flex-row items-baseline gap-x-1">
                    <p className="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">
                      $30
                    </p>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Skip the waiting line and launch your product when you
                          want
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          If you're in the first 3 products of the day, you win
                          a special badge + a mention in our newsletter (6.5K
                          subs) and social media
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Your product stays on Uneed forever and earn a
                          lifetime dofollow backlink, no matter your launch's
                          results
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-[#FF6CA8]"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          30% lifetime discount off the premium Testimonial
                          Donut plan
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 dark:disabled:bg-primary-400 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 disabled:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center"
                  >
                    <span className="">Skip the waiting line</span>
                  </button>
                  <a
                    href="/advertising/skip-the-waiting-line"
                    className="mx-auto text-sm italic hover:underline"
                  >
                    More details{" "}
                  </a>
                </div>
              </div>
              <div className="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-sand-500 dark:bg-gray-800 relative flex flex-col self-stretch w-full col-span-1">
                <div className="flex-1 flex flex-col gap-y-6 sm:p-6 p-8 xl:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">
                        Sponsorship
                      </p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                      Sponsor our newsletter
                    </p>
                  </div>
                  <div className="flex flex-row items-baseline gap-x-1">
                    <p className="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">
                      $57
                    </p>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Displayed at the top of our weekly newsletter in front
                          of 6,500 subscribers.
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          First thing people see when they open the newsletter,
                          after the introduction.
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Renewable as many times as you want.
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-[#FF6CA8]"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          30% lifetime discount off the premium Testimonial
                          Donut plan
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 dark:disabled:bg-primary-400 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 disabled:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center"
                  >
                    <span className="">Sponsor our newsletter</span>
                  </button>
                  <a
                    href="/advertising/newsletter-sponsoring"
                    className="mx-auto text-sm italic hover:underline"
                  >
                    More details{" "}
                  </a>
                </div>
              </div>
              <div className="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 shadow bg-sand-500 dark:bg-gray-800 relative flex flex-col self-stretch w-full col-span-1 ring-2 ring-primary-500 dark:ring-primary-500">
                <div className="flex-1 flex flex-col gap-y-6 sm:p-6 p-8 xl:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">
                        Premium spot
                      </p>
                      <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">
                        Best value
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                      Promote your product on Uneed
                    </p>
                  </div>
                  <div className="flex flex-row items-baseline gap-x-1">
                    <p className="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">
                      $97
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate">
                      /month
                    </p>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Displayed on the home, weekly, monthly and yearly
                          pages
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          No "related products" displayed on your product page.
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Displayed among the first 4 products in its category
                          and tags pages.
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          20K to 40K impressions
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-[#FF6CA8]"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          6 months free access on the premium Testimonial Donut
                          plan + 30% lifetime discount
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 dark:disabled:bg-primary-400 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 disabled:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center"
                  >
                    <span className="">Buy a premium spot</span>
                  </button>
                  <a
                    href="/advertising/premium-spot"
                    className="mx-auto text-sm italic hover:underline"
                  >
                    More details{" "}
                  </a>
                </div>
              </div>
              <div className="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-sand-500 dark:bg-gray-800 relative flex flex-col self-stretch w-full col-span-1">
                <div className="flex-1 flex flex-col gap-y-6 sm:p-6 p-8 xl:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">
                        Product Review
                      </p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                      We'll write a review of your product
                    </p>
                  </div>
                  <div className="flex flex-row items-baseline gap-x-1">
                    <p className="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">
                      $129
                    </p>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Rank on "[your_product] review" on Google
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Earn a backlink
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          Strengthen your customer trust
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <span
                          className="iconify i-ph:check-circle-duotone w-5 h-5 flex-shrink-0 text-[#FF6CA8]"
                          aria-hidden="true"
                          style={{}}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          1 year free access on the premium Testimonial Donut
                          plan + 30% lifetime discount
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 dark:disabled:bg-primary-400 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 disabled:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center"
                    href="https://uneed.lemonsqueezy.com/buy/c89f1f67-ea7f-4008-ab55-bc5b87be58c7"
                    rel="noopener noreferrer"
                  >
                    <span className="">Buy a review</span>
                  </a>
                  <a
                    href="/advertising/product-review"
                    className="mx-auto text-sm italic hover:underline"
                  >
                    More details{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="px-6 mt-8 lg:px-8">
              <div
                style={
                  {
                    "-x": 1286,
                    "-y": "-972px",
                    "-1c5a203a": "#FF6CA8",
                    "-7b662709": "#FF6CA8",
                  } as any
                }
                className="relative group isolate rounded-xl background-gradient ring-2 ring-[#FF6CA8] dark:ring-[#FF6CA8] before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow hover:ring-[##FF6CA8] dark:hover:ring-[#FF6CA8] transition-shadow duration-200"
                data-v-fd9b37b1
              >
                <div
                  className="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-sand-500 dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]"
                  data-v-fd9b37b1
                >
                  <div className="space-x-8 gap-y-4 rounded-xl flex items-center px-4 py-5 sm:p-6">
                    <div className="py-3" data-v-fd9b37b1>
                      <a
                        href="https://www.testimonialdonut.com?ref=uneed.best"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Uneed x Testimonial Donut"
                        className="focus:outline-none"
                        tabIndex={-1}
                        data-v-fd9b37b1
                      >
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                          data-v-fd9b37b1
                        />
                      </a>
                      <div className="flex items-center mb-4" data-v-fd9b37b1>
                        <Image
                          src="https://www.uneed.best/_ipx/_/tdonut.png"
                          alt=""
                          width={48}
                          height={48}
                          className="w-12 h-12 mr-3 sm:w-16 sm:h-16"
                        />
                        <h2
                          className="text-lg font-bold text-[#FF6CA8] sm:text-xl"
                          data-v-fd9b37b1
                        >
                          Uneed x Testimonial Donut
                        </h2>
                      </div>
                      <p
                        className="mb-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base"
                        data-v-fd9b37b1
                      >
                        {" "}
                        Uneed is partnering with Testimonial Donut, allowing you
                        to collect valuable video feedback for your product at a
                        low price 🤩{" "}
                      </p>
                      <ul
                        className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-between"
                        data-v-fd9b37b1
                      >
                        <li className="flex items-center" data-v-fd9b37b1>
                          <CircleCheck
                            color="#ff6ca8"
                            size={20}
                            className="mr-2 fill-primary-50"
                          />
                          <span
                            className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm"
                            data-v-fd9b37b1
                          >
                            Get authentic video testimonials
                          </span>
                        </li>
                        <li className="flex items-center" data-v-fd9b37b1>
                          <CircleCheck
                            color="#ff6ca8"
                            size={20}
                            className="mr-2 fill-primary-50"
                          />
                          <span
                            className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm"
                            data-v-fd9b37b1
                          >
                            Improve with feedback
                          </span>
                        </li>
                        <li className="flex items-center" data-v-fd9b37b1>
                          <CircleCheck
                            color="#ff6ca8"
                            size={20}
                            className="mr-2 fill-primary-50"
                          />
                          <span
                            className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm"
                            data-v-fd9b37b1
                          >
                            Easy website integration
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 mx-auto mt-24 max-w-7xl lg:px-8">
              <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-4">
                <div className="flex flex-col max-w-xs mx-auto gap-y-2">
                  <dd className="text-5xl font-semibold tracking-tight text-primary-500">
                    6 500+
                  </dd>
                  <dt className="text-base leading-7 dark:text-gray-400">
                    Subscribers to our newsletter
                  </dt>
                </div>
                <div className="flex flex-col max-w-xs mx-auto gap-y-2">
                  <dd className="text-5xl font-semibold tracking-tight text-primary-500">
                    252 000
                  </dd>
                  <dt className="text-base leading-7 dark:text-gray-400">
                    Visitors in 2023
                  </dt>
                </div>
                <div className="flex flex-col max-w-xs mx-auto gap-y-2">
                  <dd className="text-5xl font-semibold tracking-tight text-primary-500">
                    1 089 871
                  </dd>
                  <dt className="text-base leading-7 dark:text-gray-400">
                    Page views in 2023
                  </dt>
                </div>
                <div className="flex flex-col max-w-xs mx-auto gap-y-2">
                  <dd className="text-5xl font-semibold tracking-tight text-primary-500">
                    45%
                  </dd>
                  <dt className="text-base leading-7 dark:text-gray-400">
                    Newsletter Open rate
                  </dt>
                </div>
              </dl>
            </div>
            
            <div className="px-6 mt-16 max-w-7xl lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight dark:text-gray-50">
                {" "}
                Testimonials{" "}
              </h2>
            </div>
            <div className="px-6 pt-12 sm:pt-0 sm:mt-5 max-w-7xl lg:px-8">
              <div className="flow-root mx-auto lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                  <Link
                    href="https://x.com/remkim_/status/1651964518497677312"
                    rel="noopener noreferrer"
                    target="_blank"
                    // ref="nofollow nooppener"
                    className="sm:inline-block sm:w-full group"
                  >
                    <figure className="p-8 mt-8 text-sm leading-6 border border-sand-600 dark:border-gray-800 sm:mt-0 bg-sand-500 rounded-2xl dark:bg-gray-600 dark:border-0 dark:group-hover:bg-gray-400 group-hover:bg-sand-600">
                      <blockquote className="dark:text-gray-50">
                        <p>
                          “Gotta say @UneedLists drives insane amount of quality
                          traffic to @ResolveAI_. Loving it”
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                          src="https://i.imgur.com/9LEOJMK.jpg"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold dark:text-gray-100">
                            Rem Kim
                          </div>
                          <div className="dark:text-gray-300">@remkim_</div>
                        </div>
                      </figcaption>
                    </figure>
                  </Link>
                  <a
                    href="https://x.com/nilansaha/status/1705271087758705090?s=20"
                    rel="noopener noreferrer"
                    target="_blank"
                    // ref="nofollow nooppener"
                    className="sm:inline-block sm:w-full group"
                  >
                    <figure className="p-8 mt-8 text-sm leading-6 border border-sand-600 dark:border-gray-800 sm:mt-0 bg-sand-500 rounded-2xl dark:bg-gray-600 dark:border-0 dark:group-hover:bg-gray-400 group-hover:bg-sand-600">
                      <blockquote className="dark:text-gray-50">
                        <p>“Can confirm. Uneed is incredible.”</p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                          src="https://i.imgur.com/FDopE3e.jpg"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold dark:text-gray-100">
                            Nilan Saha
                          </div>
                          <div className="dark:text-gray-300">@nilansaha</div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a
                    href="https://indiemaker.space/sergiu/post/52224baa-dc92-11ee-b54a-0200555c4945"
                    rel="noopener noreferrer"
                    target="_blank"
                    // ref="nofollow nooppener"
                    className="sm:inline-block sm:w-full group"
                  >
                    <figure className="p-8 mt-8 text-sm leading-6 border border-sand-600 dark:border-gray-800 sm:mt-0 bg-sand-500 rounded-2xl dark:bg-gray-600 dark:border-0 dark:group-hover:bg-gray-400 group-hover:bg-sand-600">
                      <blockquote className="dark:text-gray-50">
                        <p>
                          “That's soo cool, I get traffic from Uneed everyday,
                          definitely worth the launch :)”
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                          src="https://i.imgur.com/vw0mOzX.jpeg"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold dark:text-gray-100">
                            Sergiu Chiriac
                          </div>
                          <div className="dark:text-gray-300">@s_chiriac</div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a
                    href="https://www.producthunt.com/posts/uneed-2?comment=3271821"
                    rel="noopener noreferrer"
                    target="_blank"
                    // ref="nofollow nooppener"
                    className="sm:inline-block sm:w-full group"
                  >
                    <figure className="p-8 mt-8 text-sm leading-6 border border-sand-600 dark:border-gray-800 sm:mt-0 bg-sand-500 rounded-2xl dark:bg-gray-600 dark:border-0 dark:group-hover:bg-gray-400 group-hover:bg-sand-600">
                      <blockquote className="dark:text-gray-50">
                        <p>
                          “One of my 3 launchpads I check every day. PH, DH and
                          Uneed. More people should know about this one.”
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                          src="https://i.imgur.com/iLLWHId.jpeg"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold dark:text-gray-100">
                            John Rush
                          </div>
                          <div className="dark:text-gray-300">@johnrushx</div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a
                    href="https://www.producthunt.com/posts/uneed-2?comment=3272502"
                    rel="noopener noreferrer"
                    target="_blank"
                    // ref="nofollow nooppener"
                    className="sm:inline-block sm:w-full group"
                  >
                    <figure className="p-8 mt-8 text-sm leading-6 border border-sand-600 dark:border-gray-800 sm:mt-0 bg-sand-500 rounded-2xl dark:bg-gray-600 dark:border-0 dark:group-hover:bg-gray-400 group-hover:bg-sand-600">
                      <blockquote className="dark:text-gray-50">
                        <p>
                          “Uneed is a constant traffic referrer to my landing
                          page! Calm and passionate builder and great product!”
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                          src="https://i.imgur.com/vfDbArt.jpeg"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold dark:text-gray-100">
                            Aleksandar Balalovski
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a
                    href="https://x.com/harryblucas/status/1620028715542659073?s=20"
                    rel="noopener noreferrer"
                    target="_blank"
                    // ref="nofollow nooppener"
                    className="sm:inline-block sm:w-full group"
                  >
                    <figure className="p-8 mt-8 text-sm leading-6 border border-sand-600 dark:border-gray-800 sm:mt-0 bg-sand-500 rounded-2xl dark:bg-gray-600 dark:border-0 dark:group-hover:bg-gray-400 group-hover:bg-sand-600">
                      <blockquote className="dark:text-gray-50">
                        <p>
                          “To anyone wondering if it\'s worth upgrading - I\'d
                          say definitely. Seeing some good conversion rates so
                          far.”
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                          src="https://i.imgur.com/0cewyuH.jpg"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold dark:text-gray-100">
                            Harry
                          </div>
                          <div className="dark:text-gray-300">@harryblucas</div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a
                    href="https://www.producthunt.com/posts/uneed-2?comment=3274733"
                    rel="noopener noreferrer"
                    target="_blank"
                    // ref="nofollow nooppener"
                    className="sm:inline-block sm:w-full group"
                  >
                    <figure className="p-8 mt-8 text-sm leading-6 border border-sand-600 dark:border-gray-800 sm:mt-0 bg-sand-500 rounded-2xl dark:bg-gray-600 dark:border-0 dark:group-hover:bg-gray-400 group-hover:bg-sand-600">
                      <blockquote className="dark:text-gray-50">
                        <p>
                          “Uneed still generate a bit of traffic every month for
                          my websites even after almost a year!”
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                          src="https://i.imgur.com/RlinY74.jpeg"
                          alt=""
                        />
                        <div>
                          <div className="font-semibold dark:text-gray-100">
                            Nico Jeannen
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <a
                    href="https://twitter.com/itsmatt_g/status/1790199030858797092"
                    rel="noopener noreferrer"
                    target="_blank"
                    // ref="nofollow nooppener"
                    className="sm:inline-block sm:w-full group"
                  >
                    <figure className="p-8 mt-8 text-sm leading-6 border border-sand-600 dark:border-gray-800 sm:mt-0 bg-sand-500 rounded-2xl dark:bg-gray-600 dark:border-0 dark:group-hover:bg-gray-400 group-hover:bg-sand-600">
                      <blockquote className="dark:text-gray-50">
                        <p>
                          “Uneed has unironically given me 20+ of the apps I use
                          to run my small development studio”
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          src="https://i.imgur.com/MFNLuMn.jpeg"
                          width={40}
                          height={40}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold dark:text-gray-100">
                            Mathew Gaucher
                          </div>
                          <div className="dark:text-gray-300">@itsmatt_g</div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-6 mt-16 max-w-7xl lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight dark:text-gray-50">
                {" "}
                Example Reviews{" "}
              </h2>
            </div>
            <div className="px-6 pt-12 sm:pt-0 sm:mt-5 max-w-7xl lg:px-8">
              <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16">
                <article className="relative group flex flex-col w-full gap-y-6">
                  <div className="ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none">
                    <Image
                      width={200}
                      height={200}
                      alt="Schedul Review - Optimize Your Threads Presence in 2024"
                      src="https://apcdouatoejrvwoqevfc.supabase.co/storage/v1/object/public/img/blog/blacktwist_review.jpg"
                      className="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex-1">
                      <a
                        href="/blog/schedul-review"
                        className="focus:outline-none"
                        aria-label="Schedul Review - Optimize Your Threads Presence in 2024"
                        tabIndex={-1}
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                      <div className="mb-3">
                        <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">
                          Reviews
                        </span>
                      </div>
                      <h2 className="text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                        Schedul Review - Optimize Your Threads Presence in 2024
                      </h2>
                      <div className="text-base text-gray-500 dark:text-gray-400 mt-1">
                        We've tested Schedul, the management and scheduling tool
                        for Threads to boost your audience in 2024
                      </div>
                    </div>
                    <div className="relative flex items-center gap-x-3 mt-4">
                      <time
                        dateTime="2024-09-17T00:00:00.000Z"
                        className="text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none"
                      >
                        Sep 17, 2024
                      </time>
                    </div>
                  </div>
                </article>
                <article className="relative group flex flex-col w-full gap-y-6">
                  <div className="ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none">
                    <Image
                      alt="seospark.io Review - Boost your SEO in 2024"
                      src="https://apcdouatoejrvwoqevfc.supabase.co/storage/v1/object/public/img/blog/blacktwist_review.jpg"
                      className="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex-1">
                      <a
                        href="/blog/seo-spark-review"
                        className="focus:outline-none"
                        aria-label="seospark.io Review - Boost your SEO in 2024"
                        tabIndex={-1}
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                      <div className="mb-3">
                        <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">
                          Reviews
                        </span>
                      </div>
                      <h2 className="text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                        seospark.io Review - Boost your SEO in 2024
                      </h2>
                      <div className="text-base text-gray-500 dark:text-gray-400 mt-1">
                        We've tested seospark.io, the Keyword Research &amp;
                        Automation tool for SEO professionals
                      </div>
                    </div>
                    <div className="relative flex items-center gap-x-3 mt-4">
                      <time
                        dateTime="2024-09-16T00:00:00.000Z"
                        className="text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none"
                      >
                        Sep 16, 2024
                      </time>
                    </div>
                  </div>
                </article>
                <article className="relative group flex flex-col w-full gap-y-6">
                  <div className="ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none">
                    <Image
                      alt="BlackTwist Review - Should you try Threads?"
                      src="https://apcdouatoejrvwoqevfc.supabase.co/storage/v1/object/public/img/blog/blacktwist_review.jpg"
                      className="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex-1">
                      <a
                        href="/blog/blacktwist-review"
                        className="focus:outline-none"
                        aria-label="BlackTwist Review - Should you try Threads?"
                        tabIndex={-1}
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                      <div className="mb-3">
                        <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">
                          Reviews
                        </span>
                      </div>
                      <h2 className="text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                        BlackTwist Review - Should you try Threads?
                      </h2>
                      <div className="text-base text-gray-500 dark:text-gray-400 mt-1">
                        We've tested BlackTwist, the #1 social media assistant
                        for Threads
                      </div>
                    </div>
                    <div className="relative flex items-center gap-x-3 mt-4">
                      <time
                        dateTime="2024-08-26T00:00:00.000Z"
                        className="text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none"
                      >
                        Aug 26, 2024
                      </time>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
