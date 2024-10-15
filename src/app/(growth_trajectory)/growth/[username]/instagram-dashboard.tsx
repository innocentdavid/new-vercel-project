"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { FollowersGrowthChart } from "./followers-growth-chart"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DailyChangeChart } from "./daily-change-chart"
import { OverviewCard } from "./overview-card"
import { FAQ } from "./faq"

export default function InstagramDashboard() {
  const [activeTab, setActiveTab] = useState("All Time")

  return (
    <div className="space-y-4 mx-4 sm:mx-6 lg:mx-8 mt-6">
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full animate-spin"></div>
                <Avatar className="h-16 w-16 border-4 border-white relative">
                  <AvatarImage src="https://i.pravatar.cc/64" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome, 👋</h2>
                <p className="text-sm text-gray-500">Sit back & watch the growth skyrocket!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="text-center">
                <p className="font-semibold">1,234</p>
                <p className="text-gray-500">Posts</p>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="font-semibold">5.6K</p>
                <p className="text-gray-500">Followers</p>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="font-semibold">567</p>
                <p className="text-gray-500">Following</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 py-[11px] _bg-white border border-white border-opacity-25 shadow hover:opacity-60 transition-opacity duration-200 ease-in-out" style={{borderRadius: '9px', border: '1px solid var(--Gradients-White-Stroke, #FFF)', background: 'linear-gradient(180deg, rgba(223, 225, 231, 0.00) 0%, rgba(223, 225, 231, 0.05) 100%), var(--Neutral-0, #FFF)', boxShadow: 'rgba(225, 226, 228, 0.56) 0px 0px 0px 1px, rgba(119, 124, 133, 0.12) 0px 1px 2px 0px'}}>
                <svg className="transition-transform group-hover:-rotate-12 w-[1.1rem] h-[1.1rem]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium leading-tight text-center text-gray-900">Upgrade Plan</span>
              </button>
              <button className="w-full sm:w-auto flex items-center group justify-center gap-2 px-[18px] py-[11px] hover:opacity-90 transition-opacity duration-200 ease-in-out" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '9px', background: 'var(--Gradients-Primary-Primary-Button, linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(135deg, #7549F4 2.88%, #FCA6E9 100%))', boxShadow: 'rgba(47, 10, 154, 0.4) 0px 1px 2px, rgba(255, 255, 255, 0.4) 0px 0px 0px 1px inset', border: '1px solid rgba(110, 63, 243, 0.4)', filter: 'saturate(1.15)'}}>
                <svg className="w-[1.1rem] h-[1.1rem] text-white transition-transform group-hover:-rotate-12" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F3F4F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z" stroke="#F3F4F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-medium leading-tight text-white text-center text-shadow">Start Growth</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <FollowersGrowthChart />

      <div className="grid grid-cols-1 gap-0 mt-3 sm:grid-cols-3 lg:gap-6">
        <DailyChangeChart activeTab={activeTab} setActiveTab={setActiveTab} />
        <OverviewCard />
      </div>

      <FAQ />
    </div>
  )
}