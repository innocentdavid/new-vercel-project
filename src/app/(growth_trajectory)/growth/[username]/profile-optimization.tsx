import { ArrowRightIcon, ArrowDownIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { UserProfile } from "@/lib/types";
import minimizeNumber from "@/lib/minimize-number";

export default function ProfileOptimization({ user }: { user: UserProfile }) {
  if (!user) return <></>;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-4">
      <ProfileCard
        username={user.username}
        posts={user.posts || 0}
        followers={user.followers || 0}
        following={user.followings || 0}
        name={user.name}
        // bio={[
        //   user.biography,
        //   // "Z ljubeznijo do kulinarike in narave",
        //   // "Restaurant •Rooms •Wedding destination ❤️",
        //   // "Žabljek 32, Laporje, Brezovica, Slovenia 2318",
        // ]}
        bio={user.biography.split(/[\|•]/)}
        profilePicture={user.profileImage || ""}
        bio_links={user.bio_links}
        optimized={false}
      />
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
        <ArrowDownIcon className="w-6 h-6 text-gray-400 lg:hidden" />
        <ArrowRightIcon className="w-6 h-6 text-gray-400 hidden lg:block" />
      </div>
      <ProfileCard
        username={user.username}
        posts={user.posts || 0}
        followers={user.followers || 0}
        following={user.followings || 0}
        name={user.name}
        // bio={[
        //   ,
        //   "🍽️ Culinary haven in nature's embrace",
        //   "🏡 Charming rooms & dream wedding venue",
        //   "🌟 Farm-to-table Slovenian cuisine",
        //   "📍 Žabljek 32, Laporje, Brezovica, Slovenia",
        // ]}
        bio={user.bio.split(/[\|•]/)}
        profilePicture={user.profileImage || ""}
        bio_links={user.bio_links}
        optimized={true}
      />
    </div>
  );
}

function ProfileCard({
  username,
  posts,
  followers,
  following,
  name,
  bio,
  profilePicture,
  bio_links,
  optimized,
}: {
  username: string;
  posts: number;
  followers: number;
  following: number;
  name: string;
  bio: string[];
  profilePicture: string;
  bio_links: UserProfile["bio_links"];
  optimized: boolean;
}) {
  return (
    <Card className="w-full max-w-sm bg-white dark:bg-[#0A0F0F] shadow-lg rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
          <div className="relative w-20 h-20 mb-4 sm:mb-0">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
              style={{
                animation: "spin 2.5s linear infinite",
              }}
            />
            <Avatar className="w-[76px] h-[76px] border-2 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <AvatarImage src={profilePicture} alt={name} />
              <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="sm:ml-4 text-center sm:text-left">
            <h2 className="text-xl font-bold">{username}</h2>
            <div className="flex justify-center sm:justify-start space-x-4 text-sm text-gray-600 mt-2">
              <span>
                <strong>{minimizeNumber(posts)}</strong> posts
              </span>
              <span>
                <strong>{minimizeNumber(followers)}</strong> followers
              </span>
              <span>
                <strong>{minimizeNumber(following)}</strong> following
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
          {bio_links?.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {link.url}
            </a>
          ))}
        </div>
        {optimized && (
          <div className="mt-4 bg-green-100 text-green-800 p-2 rounded-lg text-sm">
            ✨ Optimized bio for better engagement and discoverability
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// @keyframes spin {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
