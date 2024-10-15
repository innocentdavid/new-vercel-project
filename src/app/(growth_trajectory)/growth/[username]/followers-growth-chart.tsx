import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: "Jun 15", followers: 1.4 },
  { date: "Jun 18", followers: 1.45 },
  { date: "Jun 21", followers: 1.5 },
  { date: "Jun 24", followers: 1.6 },
  { date: "Jun 27", followers: 1.7 },
  { date: "Jun 30", followers: 1.8 },
  { date: "Jul 2", followers: 1.9 },
  { date: "Jul 4", followers: 2.0 },
  { date: "Jul 6", followers: 2.2 },
  { date: "Jul 8", followers: 2.4 },
  { date: "Jul 10", followers: 2.7 },
  { date: "Jul 12", followers: 3.0 },
  { date: "Jul 15", followers: 3.146 },
]

export function FollowersGrowthChart() {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="block w-full mb-2 sm:flex">
          <div className="w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex flex-row items-center">
                    <div className="inline-flex items-center mb-1 text-base font-medium leading-normal text-zinc-900">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3337 2.8898C14.5684 3.50343 15.417 4.77762 15.417 6.25C15.417 7.72238 14.5684 8.99657 13.3337 9.6102M15.0003 13.972C16.2599 14.5419 17.3941 15.4708 18.3337 16.6667M1.66699 16.6667C3.28907 14.6021 5.49131 13.3333 7.91699 13.3333C10.3427 13.3333 12.5449 14.6021 14.167 16.6667M11.667 6.25C11.667 8.32107 9.98806 10 7.91699 10C5.84592 10 4.16699 8.32107 4.16699 6.25C4.16699 4.17893 5.84592 2.5 7.91699 2.5C9.98806 2.5 11.667 4.17893 11.667 6.25Z" stroke="#85818E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Followers Growth
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 ml-2 text-gray-400 place-self-center ignore">
                        <path d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z" fill="#B4B6BB" />
                        <path d="M9.99996 13.3333V9.99996M9.99996 6.66663H10.0083M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="relative z-20">Your Instagram account's follower growth evolution over the last 30 days.</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="text-4xl font-bold text-gray-900 whitespace-nowrap">
              <span className="inline-flex items-center text-zinc-900 font-semibold text-4xl lg:text-[40px]">3,146</span>
              <span className="ml-2.5 text-4xl translate-y-1">🔥</span>
              <div className="ml-4 mt-[3px] mb-1 align-middle inline-flex items-center rounded-full text-shadow px-2.5 py-0.5 text-sm font-medium text-white" style={{ background: 'linear-gradient(74.41deg, rgb(67, 153, 23) -52.09%, rgb(176, 231, 82) 170.9%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-white">
                  <path fillRule="evenodd" d="M10 15a.75.75 0 0 1-.75-.75V7.612L7.29 9.77a.75.75 0 0 1-1.08-1.04l3.25-3.5a.75.75 0 0 1 1.08 0l3.25 3.5a.75.75 0 1 1-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0 1 10 15Z" clipRule="evenodd" />
                </svg>
                16.3%
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full m-0" style={{ height: '265px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorFollowers" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(245, 133, 41, 0.15)" />
                  <stop offset="25%" stopColor="rgba(252, 199, 55, 0.15)" />
                  <stop offset="50%" stopColor="rgba(221, 42, 123, 0.15)" />
                  <stop offset="75%" stopColor="rgba(129, 52, 175, 0.15)" />
                  <stop offset="100%" stopColor="rgba(81, 91, 212, 0.15)" />
                </linearGradient>
                <linearGradient id="strokeFollowers" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF7F1A" />
                  <stop offset="25%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#F50057" />
                  <stop offset="75%" stopColor="#9B27AF" />
                  <stop offset="100%" stopColor="#3D5AFE" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
              <XAxis 
                dataKey="date" 
                axisLine={{ stroke: '#F3F4F6' }}
                tickLine={false}
                tick={{ fill: '#B4B6BB', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#B4B6BB', fontSize: 12 }}
                dx={-10}
              />
              <RechartsTooltip
                contentStyle={{
                  backgroundColor: 'rgb(22, 23, 28)',
                  border: 'none',
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
                itemStyle={{ color: 'white' }}
              />
              <Area 
                type="monotone" 
                dataKey="followers" 
                stroke="url(#strokeFollowers)" 
                fill="url(#colorFollowers)"
                strokeWidth={2}
                dot={{ stroke: 'white', strokeWidth: 3, r: 4, fill: 'white', fillOpacity: 0.55 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}