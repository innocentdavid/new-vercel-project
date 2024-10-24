import AddBookmark from "@/components/AddBookmark";
import BackgroundBeamsWithCollisionDemo from "@/components/homepage/background-beams-with-collision-demo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { tool_rating, TOOLS } from "@/lib/mockToolsData";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mb-20 dark:bg-[#1E1E1E]">
      <BackgroundBeamsWithCollisionDemo />

      <section className="max-w-[1536px] mx-auto py-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Instagram Followers Growth Tools 2024
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
          {TOOLS.map((tool, i) => (
            // {/* <ProductCard key={i} {...tool} /> */}
            <ProductCard_V2 key={i} {...tool} />
          ))}
        </div>
        {/* <div className="flex justify-center mt-8">
          <Button>Load More</Button>
        </div> */}
      </section>
    </div>
  );
}

const Badge = ({ text, type }: { text: string; type: string }) => {
  const baseClasses =
    "flex items-center px-2 py-1 text-xs font-medium border rounded-full shadow cursor-default";
  const typeClasses: any = {
    // premium: "text-primary-500 border-primary-500 bg-primary-50",
    best: "text-green-600 border-green-600 bg-green-50",
    warning: "text-yellow-600 border-yellow-600 bg-yellow-50",
    danger: "text-red-600 border-red-600 bg-red-50",
  };
  return <span className={`${baseClasses} ${typeClasses[type]}`}>{text}</span>;
};

function ProductCard_V2(tool: (typeof TOOLS)[0]) {
  const rating = tool_rating.find((t) => t.slug === tool.slug)?.rating;
  // const toolDetails = tools_details.find((t) => t.slug === tool.slug);

  return (
    <div className="flex flex-col bg-card text-card-foreground h-full w-full rounded-xl border shadow-lg relative">
      {tool.badges && (
        <div className="absolute z-20 right-2 -top-3 flex items-center gap-2">
          {tool.badges.length > 0 &&
            tool.badges.map((badge, i) => (
              <Badge key={i} text={badge.text} type={badge.type} />
            ))}
        </div>
      )}
      <div className="px-6 pb-2 pt-4 flex h-24 flex-row items-start gap-4">
        <Link href={`/tool/${tool.slug}`}>
          <div className="relative flex flex-shrink-0 rounded-xl border">
            <Avatar className="h-[60px] w-[60px] rounded-xl relative">
              <AvatarImage
                src={tool.logo}
                // src={"/products/lift-logo.png"}
                alt={`${tool.toolName} logo`}
                loading="lazy"
                width={120}
                height={120}
                decoding={"async"}
                data-nimg={1}
                className={`aspect-square_ h-[60px]_ h-auto w-[50px] m-auto rounded-xl ${
                  tool.slug === "liftinfluence" && "!h-[40px] !w-auto"
                }`}
                style={{ color: "transparent" }}
              />

              <AvatarFallback className="rounded-xl">
                {tool.name.split(" ").map((s) => s[0].toUpperCase())}
              </AvatarFallback>
            </Avatar>
            {/* <Image
              alt={`${tool.toolName} logo`}
              loading="lazy"
              width={120}
              height={120}
              decoding={"async"}
              data-nimg={1}
              className="aspect-square h-[60px] w-[60px] rounded-xl"
              style={{ color: "transparent" }}
              src={tool.main_image}
            /> */}
            {tool.is_verified && (
              <div className="inline-flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-0 p-0 m-0 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 transform rounded">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6453 7.03281C16.3508 6.725 16.0461 6.40781 15.9312 6.12891C15.825 5.87344 15.8187 5.45 15.8125 5.03984C15.8008 4.27734 15.7883 3.41328 15.1875 2.8125C14.5867 2.21172 13.7227 2.19922 12.9602 2.1875C12.55 2.18125 12.1266 2.175 11.8711 2.06875C11.593 1.95391 11.275 1.64922 10.9672 1.35469C10.4281 0.836719 9.81563 0.25 9 0.25C8.18437 0.25 7.57266 0.836719 7.03281 1.35469C6.725 1.64922 6.40781 1.95391 6.12891 2.06875C5.875 2.175 5.45 2.18125 5.03984 2.1875C4.27734 2.19922 3.41328 2.21172 2.8125 2.8125C2.21172 3.41328 2.20312 4.27734 2.1875 5.03984C2.18125 5.45 2.175 5.87344 2.06875 6.12891C1.95391 6.40703 1.64922 6.725 1.35469 7.03281C0.836719 7.57188 0.25 8.18437 0.25 9C0.25 9.81563 0.836719 10.4273 1.35469 10.9672C1.64922 11.275 1.95391 11.5922 2.06875 11.8711C2.175 12.1266 2.18125 12.55 2.1875 12.9602C2.19922 13.7227 2.21172 14.5867 2.8125 15.1875C3.41328 15.7883 4.27734 15.8008 5.03984 15.8125C5.45 15.8187 5.87344 15.825 6.12891 15.9312C6.40703 16.0461 6.725 16.3508 7.03281 16.6453C7.57188 17.1633 8.18437 17.75 9 17.75C9.81563 17.75 10.4273 17.1633 10.9672 16.6453C11.275 16.3508 11.5922 16.0461 11.8711 15.9312C12.1266 15.825 12.55 15.8187 12.9602 15.8125C13.7227 15.8008 14.5867 15.7883 15.1875 15.1875C15.7883 14.5867 15.8008 13.7227 15.8125 12.9602C15.8187 12.55 15.825 12.1266 15.9312 11.8711C16.0461 11.593 16.3508 11.275 16.6453 10.9672C17.1633 10.4281 17.75 9.81563 17.75 9C17.75 8.18437 17.1633 7.57266 16.6453 7.03281ZM12.5672 7.56719L8.19219 11.9422C8.13414 12.0003 8.06521 12.0464 7.98934 12.0779C7.91346 12.1093 7.83213 12.1255 7.75 12.1255C7.66787 12.1255 7.58654 12.1093 7.51066 12.0779C7.43479 12.0464 7.36586 12.0003 7.30781 11.9422L5.43281 10.0672C5.31554 9.94991 5.24965 9.79085 5.24965 9.625C5.24965 9.45915 5.31554 9.30009 5.43281 9.18281C5.55009 9.06554 5.70915 8.99965 5.875 8.99965C6.04085 8.99965 6.19991 9.06554 6.31719 9.18281L7.75 10.6164L11.6828 6.68281C11.7409 6.62474 11.8098 6.57868 11.8857 6.54725C11.9616 6.51583 12.0429 6.49965 12.125 6.49965C12.2071 6.49965 12.2884 6.51583 12.3643 6.54725C12.4402 6.57868 12.5091 6.62474 12.5672 6.68281C12.6253 6.74088 12.6713 6.80982 12.7027 6.88569C12.7342 6.96156 12.7503 7.04288 12.7503 7.125C12.7503 7.20712 12.7342 7.28844 12.7027 7.36431C12.6713 7.44018 12.6253 7.50912 12.5672 7.56719Z"
                    fill="#49ADFF"
                  />
                </svg>
              </div>
            )}
          </div>
        </Link>
        <div className="flex flex-col items-start">
          <Link href={`/tool/${tool.slug}`}>
            <p className="m-0 line-clamp-2 overflow-hidden text-xl font-semibold text-slate-700 dark:text-[#F7FAFC]">
              {tool.name}
            </p>
          </Link>
          <Link href={`/tool/${tool.slug}`}>
            <div className="flex items-center gap-2 text-lg">
              <StarRating rating={rating || 1} />
              {/* <div className="flex">
                <div className="flex text-yellow-500">
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <div className="relative">
                    <Star size={15} fill="none" stroke="currentColor" />
                    <div
                      className="absolute top-0 left-0 h-full overflow-hidden"
                      style={{ width: "50%" }}
                    >
                      <Star size={15} fill="currentColor" />
                    </div>
                  </div>
                  <span className="sr-only">Rated 4.5 out of 5</span>
                </div>
              </div> */}
            </div>
          </Link>
        </div>
      </div>
      <div className="px-6">
        <div className="flex justify-between text-lg">
          <span>{tool.subscription_type}</span>
          <span className="flex items-center text-slate-500 gap-1">
            <div className="">{tool.saves}</div>
            <AddBookmark>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bookmark h-5 w-5 hover:cursor-pointer hover:fill-primary-500 hover:stroke-primary-500 fill-bookmark-inactive stroke-bookmark-inactive"
                  role="presentation"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
                <span className="sr-only">Add bookmark</span>
              </button>
            </AddBookmark>
          </span>
        </div>
      </div>
      <p className="text-muted-foreground my-2 line-clamp-2 overflow-hidden overflow-ellipsis px-6 text-base">
        {tool?.description}
      </p>
      <div className="px-6 mb-6 flex flex-wrap gap-1 py-2 text-base text-primary-500">
        <div className="flex flex-wrap gap-x-2 gap-y-1 ">
          <span
            className="hover:text-underline cursor-pointer"
            // href=""
          >
            #{tool.name}
          </span>
          <span
            className="hover:text-underline cursor-pointer"
            // href=""
          >
            #instagram
          </span>
          <span
            className="hover:text-underline cursor-pointer"
            // href=""
          >
            #followers
          </span>
        </div>
      </div>
      <div className="px-6 mt-auto flex items-center justify-between pb-4">
        <div
          className={cn(
            "flex items-center gap-2 tool-label",
            tool.featured ? "text-yellow-500" : "text-[#6b7280]"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            // stroke="#6b7280"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>{" "}
          Featured
        </div>

        <Link
          href={`/tool/${tool.slug}`}
          // rel="nofollow"
          className="hover:no-underline"
          data-tool-name="M1-Project"
          data-tool-category="marketing"
          data-tool-placement="homepage"
          data-sponsorship-status="active"
          data-sponsor-position={2}
          data-sponsor-status="not_active"
          // href={`${
          //   toolDetails?.siteLink || "https://" + toolDetails?.slug + ".com"
          // }?utm_source=Futurepedia&utm_medium=1004`}
        >
          <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-500 flex items-center gap-2 border-2 border-primary-500 hover:bg-primary-500 hover:text-white h-10 px-4 py-2">
            <span className="whitespace-nowrap text-lg font-normal">More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={3}
              height={3}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-external-link h-5 w-5"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

const StarRating = ({ rating }: { rating: number }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, index) => {
        if (index < filledStars) {
          return <Star key={index} size={15} fill="currentColor" />;
        } else if (index === filledStars && hasHalfStar) {
          return (
            <div className="relative" key={index}>
              <Star size={15} fill="none" stroke="currentColor" />
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: "50%" }}
              >
                <Star size={15} fill="currentColor" />
              </div>
            </div>
          );
        } else {
          return (
            <Star key={index} size={15} fill="none" stroke="currentColor" />
          );
        }
      })}
      <span className="sr-only">Rated {rating} out of 5</span>
    </div>
  );
};
