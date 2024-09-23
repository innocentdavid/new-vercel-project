import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import ExpandableCardDemoStandard from "@/components/blocks/expandable-card-demo-standard";
import BackgroundBeamsWithCollisionDemo from "@/components/homepage/background-beams-with-collision-demo";
import HoverBorderGradientDemo from "@/components/homepage/hover-border-gradient-demo";
import AreaChartComponent from "@/components/ui/AreaChart";
import { Button } from "@/components/ui/button";
import { TOOLS } from "@/lib/mockToolsData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mb-20">
      <BackgroundBeamsWithCollisionDemo />
      <section className="max-w-[1536px] mx-auto mt-20">
        <h2 className="mb-6 text-center text-3xl font-bold">Just Launched</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
          {TOOLS.map((tool, i) => (
            <ProductCard key={i} {...tool} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button>Load More</Button>
        </div>
      </section>
    </div>
  );
}

function ProductCard(tool: (typeof TOOLS)[0]) {
  return (
    <div className="group">
      <div
        // href={`#`}
        className="flex flex-col gap-2 bg-[#FBFCFE] dark:bg-[#0A0A0A] relative text-[0.875rem] leading-[1.5] border-[4px] border-[#f9a8d4] rounded-[6px] shadow-sm"
      >
        <div className="relative bg-[#F0F4F8] dark:bg-[#0A0E0F]">
          <div className="aspect-w-16 aspect-h-9">
            <Link href={`/tool/${tool.slug}`}>
              <Image
                src={tool.mainImageUrl}
                alt=""
                width={352}
                height={185}
                className="object-cover w-full h-full"
              />
            </Link>
          </div>
          <Link href={`/review/${tool.slug}`} className="absolute bottom-0 translate-y-1/2 mr-auto right-4 z-[2] rounded-[50%]">
            <button className="bg-[#F0F4F8] dark:bg-[#0A0E0F] hover:bg-[#DDE7EE] dark:hover:bg-[#32383E] px-4 py-[0.375rem] rounded-[150px]">
              <p className="text-[0.875rem]">⭐️</p>
            </button>
          </Link>
        </div>

        <Link href={`/tool/${tool.slug}`} className="" prefetch={false}>
          <div className="flex flex-col gap-[0.1171875rem]">
            <p className="text-base text-center font-medium text-[#171A1C] dark:text-[#F0F4F8] group-hover:text-[#ec4899] underline decoration-blue-500">
              {tool.title}
            </p>
            <p className="text-sm text-gray-600 line-clamp-2">
              <span />
            </p>
            <div className="mt-4 h-[100px] w-full">
              {/* <div className="w-full h-full">Chart container</div> */}
              <AreaChartComponent />
            </div>
          </div>
        </Link>

        <div className="flex items-center bg-[#F0F4F8] dark:bg-[#0A0E0F] py-[7.5px] px-[10px]">
          <div className="flex items-center text-xs text-[#32383E] dark:text-[#CDD7E1]">
            <span className="mr-1">🌎</span>27K
          </div>
          <hr className="relative flex-shrink-0 items-stretch h-[1px] w-[25px] rotate-90 bg-[rgba(99_107_116_/_0.2)]" />

          <Link href={tool.toolLink} target="_blank">
            <span className="border border-[#ec4899] text-[#ec4899] dark:text-[#fbcfe8] rounded-full px-3 text-sm">
              {tool.toolName}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
