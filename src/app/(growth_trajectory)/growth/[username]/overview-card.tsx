/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Eye, Users, UserPlus, ImageIcon } from 'lucide-react'

export function OverviewCard() {
  return (
    <Card className="divide-y border mb-6 md:mb-8 divide-gray-200 overflow-hidden border-gray-100_ bg-white dark:bg-[#0A0F0F] relative pb-0">
      <CardContent className="px-0 py-6">
        <div className="relative inline-flex items-center w-full px-3 sm:px-3">
          {/* <div className="absolute top-0 right-0 mt-4 mr-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <svg className="w-[18px] h-[18px] ml-2 place-self-center ignore fill-gray-300" stroke="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.7px" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.0023 18.458H12.0115L12.0023 18.4488C12.758 18.4488 13.385 17.8236 13.3875 17.0687C13.3875 17.0702 13.3875 17.0718 13.3875 17.0733V17.0641C13.3875 17.0656 13.3875 17.0672 13.3875 17.0687C13.385 16.3046 12.758 15.6886 12.0023 15.6886C11.2357 15.6886 10.617 16.3071 10.617 17.0733C10.617 17.8303 11.2357 18.4488 12.0023 18.458ZM13.4891 12.8361V12.8453L13.485 12.8378C13.4863 12.8372 13.4877 12.8367 13.4891 12.8361ZM12.935 13.6762C12.9258 13.3084 13.1456 12.9773 13.485 12.8378L13.443 12.7623C14.7913 12.1715 15.6686 10.8514 15.6686 9.38357C15.6686 7.35266 14.0063 5.69101 11.9746 5.70024C9.9428 5.70024 8.28045 7.36189 8.28969 9.40203L8.29892 9.41126C8.29892 9.91899 8.70527 10.3344 9.22245 10.3344C9.73039 10.3344 10.146 9.91899 10.146 9.41126C10.146 8.67275 10.58 8.00809 11.2542 7.72192C12.187 7.31574 13.2767 7.74038 13.6923 8.68198C14.0987 9.61435 13.6738 10.7037 12.7411 11.1191V11.1283C11.7252 11.5622 11.0695 12.5592 11.0787 13.6669L11.088 13.6762C11.088 14.1839 11.4943 14.5993 12.0115 14.5993C12.5194 14.5993 12.935 14.1839 12.935 13.6762Z"></path>
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="relative z-20">A bird's-eye view of your account's performance over time.</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div> */}
          <Eye className="mr-3 text-purple-500 w-7 h-7" />
          <h2 className="inline-flex items-center text-xl font-bold tracking-tight text-gray-800 dark:text-gray-500 font-dashboard">Overview</h2>
        </div>
        <div className="px-4 pt-1">
          <div className="flex flex-wrap items-center w-full gap-2 mb-1.5 text-sm font-medium place-content-between">
            <span className="_px-4 py-1.5 text-[#6B7280] rounded-lg bg-dashbg">Aug 16, 2024</span>
            <svg className="w-4 h-4 -ml-[1px] text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 11.9999H21M21 11.9999L14 5M21 11.9999L14 18.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="_px-4 py-1.5 text-[#6B7280] rounded-lg bg-dashbg">Oct 14, 2024</span>
          </div>
          <div className="flex flex-col justify-between w-full h-full">
            {[
              { title: "Followers", icon: Users, change: "+25,615", value: "-55,608" },
              { title: "Following", icon: UserPlus, change: "0", value: "+2" },
              { title: "Posts", icon: ImageIcon, change: "+12", value: "+190" }
            ].map((item, index) => (
              <div key={item.title} className={`flex flex-row items-center justify-between w-full px-2 py-4 lg:px-0 ${index !== 2 ? 'border-b border-b-1' : ''}`}>
                <div className="flex flex-col space-y-1.5 font-dashboard">
                  <div className="inline-flex flex-row items-center text-base font-medium">
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.title}
                  </div>
                  <div className="text-sm font-normal text-gray-500">
                    <span className={`px-1.5 mr-0.5 font-medium py-0.5 rounded-md ${item.title === 'Following' ? 'text-rose-500 bg-rose-100' : 'text-green-500 bg-green-100 border-green-400'}`}>
                      {item.change}
                    </span>
                    {' vs Aug 16 - Sep 16'}
                  </div>
                </div>
                <div className={`px-3 py-2 text-base font-semibold leading-5 rounded-lg font-dashboard ${item.title === 'Followers' ? 'bg-rose-100 text-rose-500' : 'bg-green-100 text-green-500'}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}