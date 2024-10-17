import { ArrowRightIcon, ArrowDownIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

export default function ProfileOptimization() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-4">
      <ProfileCard
        username="gostisceirsic"
        posts={1756}
        followers={14400}
        following={898}
        name="Gostišče Iršič"
        bio={[
          "Z ljubeznijo do kulinarike in narave",
          "Restaurant •Rooms •Wedding destination ❤️",
          "Žabljek 32, Laporje, Brezovica, Slovenia 2318",
        ]}
        website="gostisce-irsic.com"
        optimized={false}
      />
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
        <ArrowDownIcon className="w-6 h-6 text-gray-400 lg:hidden" />
        <ArrowRightIcon className="w-6 h-6 text-gray-400 hidden lg:block" />
      </div>
      <ProfileCard
        username="gostisceirsic"
        posts={1756}
        followers={14400}
        following={898}
        name="Gostišče Iršič"
        bio={[
          "🍽️ Culinary haven in nature's embrace",
          "🏡 Charming rooms & dream wedding venue",
          "🌟 Farm-to-table Slovenian cuisine",
          "📍 Žabljek 32, Laporje, Brezovica, Slovenia",
        ]}
        website="gostisce-irsic.com"
        optimized={true}
      />
    </div>
  )
}

function ProfileCard({
  username,
  posts,
  followers,
  following,
  name,
  bio,
  website,
  optimized,
}: {
  username: string
  posts: number
  followers: number
  following: number
  name: string
  bio: string[]
  website: string
  optimized: boolean
}) {
  return (
    <Card className="w-full max-w-sm bg-white shadow-lg rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
          <div className="relative w-20 h-20 mb-4 sm:mb-0">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
              style={{
                animation: 'spin 1.5s linear infinite',
              }}
            />
            <Avatar className="w-[76px] h-[76px] border-2 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <AvatarImage src="/placeholder.svg?height=76&width=76" alt={name} />
              <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="sm:ml-4 text-center sm:text-left">
            <h2 className="text-xl font-bold">{username}</h2>
            <div className="flex justify-center sm:justify-start space-x-4 text-sm text-gray-600 mt-2">
              <span>
                <strong>{posts}</strong> posts
              </span>
              <span>
                <strong>{(followers / 1000).toFixed(1)}K</strong> followers
              </span>
              <span>
                <strong>{following}</strong> following
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">{name}</p>
          {bio.map((line, index) => (
            <p key={index} className="text-sm">
              {line}
            </p>
          ))}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            {website}
          </a>
        </div>
        {optimized && (
          <div className="mt-4 bg-green-100 text-green-800 p-2 rounded-lg text-sm">
            ✨ Optimized bio for better engagement and discoverability
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// @keyframes spin {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }