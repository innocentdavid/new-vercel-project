/* eslint-disable react/no-unescaped-entities */
import { TOOLS } from "@/lib/mockToolsData";
import { tools_review } from "@/lib/tools_review";
import {
  ArrowLeft,
  ArrowUpRight,
  Banknote,
  SquarePen,
  Star,
} from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Fragment } from "react";
import { BlogPost, TocComp } from "./comp";
import { tools_details } from "@/lib/tools_details";

function decodeURLString(encodedString: string) {
  try {
    return decodeURIComponent(encodedString);
  } catch (e) {
    console.error("Error decoding URL string:", e);
    return encodedString; // Return the original string if decoding fails
  }
}

const generateSeoDescription = (text: string, wordLimit = 22) => {
  // Function to strip HTML tags from text
  const stripHtmlTags = (text: string) => {
    return text.replace(/<\/?[^>]+>/gi, "");
  };

  // Remove HTML tags from the text
  const cleanText = stripHtmlTags(text);

  // Split the cleaned text into words
  const words = cleanText.split(" ");

  // Check if the number of words exceeds the limit
  if (words.length <= wordLimit) {
    return cleanText;
  }

  // Truncate the text and add ellipsis
  return words.slice(0, wordLimit).join(" ") + " ...";
};

async function getToolBySlug(slug: string) {
  // const tool = TOOLS.find((tool) => tool.slug === slug);
  const tool = tools_review.find((tool) => tool.slug === slug);
  return tool;
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const slug = decodeURLString(params.slug);
  const tool = await getToolBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  // const seo_description = generateSeoDescription(tool?.excerpt!);
  const seo_description = generateSeoDescription(tool?.content || "");

  return {
    title: `FollowersTool: ${tool?.name} Review 2024`,
    description: seo_description,
    alternates: {
      canonical: `https://followerstool.vercel.app/review/${slug}`,
    },
    openGraph: {
      // images: tool?.main_image || "",
      images: [tool?.main_image || "", ...previousImages],
    },
  };
}

export default async function ReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURLString(params.slug);
  const tool = await getToolBySlug(slug);
  if (!tool) return notFound();
  const toolDetails = tools_details.find((t) => t.slug === tool.slug);

  return (
    <div
      className="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8 mt-4 w-full mb-20"
      id="review"
    >
      <div className="lg:col-span-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="w-full">
            <div className="max-w-6xl px-4 mx-auto sm:px-12 lg:px-16">
              <Link
                href={`/tool/${tool.slug}`}
                className="router-link-active flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-500"
              >
                <ArrowLeft size={16} /> Go Back{" "}
              </Link>
              <h1 className="mt-8 text-3xl font-bold tracking-tight dark:text-primary-500 sm:text-4xl lg:text-5xl xl:text-6xl">
                {tool.title}
              </h1>
              {/* <p className="mt-4 text-lg font-normal text-gray-500 dark:text-gray-400 current-post-excerpt lg:text-xl">
                {tool.description}
              </p> */}
              <div className="flex flex-wrap items-center gap-3 mt-3 current-post-tags-wrapper _lg:mt-10">
                <span className="text-sm text-gray-400 current-post-publish-date">
                  <time title={toolDetails?.added_on.toLocaleString() || ""}>
                    {new Date(toolDetails?.added_on || "").toLocaleDateString()}
                  </time>
                </span>
              </div>
            </div>

            <div className="max-w-6xl px-4 mx-auto mt-24 mb-12 prose md:prose-lg lg:prose-xl prose-code:text-white prose-h1:text-primary-500 prose-h2:text-primary-500 prose-a:text-primary-500 prose-a:no-underline sm:px-12 lg:px-16 dark:prose-invert">
              <div className="grid grid-cols-1 gap-24 lg:grid-cols-3 scroll-smooth">
                <article className="block col-span-1 mt-0 lg:col-span-2">
                  {tool.audio ? (
                    <div>
                      <iframe
                        width="100%"
                        height={166}
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={tool.audio.iframe}
                      />
                      <div
                        style={{
                          fontSize: 10,
                          color: "#cccccc",
                          lineBreak: "anywhere",
                          wordBreak: "normal",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          fontFamily:
                            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                          fontWeight: 100,
                        }}
                      >
                        {tool.audio.others.map((item, i) => (
                          <Fragment key={i}>
                            <a
                              href={item.link}
                              title="Social Media Reviews"
                              target="_blank"
                              style={{
                                color: "#cccccc",
                                textDecoration: "none",
                              }}
                            >
                              {item.name}
                            </a>
                            {i + 1 < tool.audio.others.length && (
                              <span className="px-2">|</span>
                            )}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Image
                      width={649}
                      height={365}
                      alt=""
                      src={tool.main_image}
                      className="object-cover w-full h-auto !mt-0 border rounded-lg border-primary-500 dark:border-ngray-600"
                    />
                  )}

                  <BlogPost contentString={tool.content} />
                </article>

                <aside className="hidden col-span-1 lg:flex lg:flex-col">
                  <div className="sticky top-16">
                    <h4 className="text-lg font-normal tracking-wider uppercase text-[#111827] dark:text-gray-400 lg:mt-16 lg:leading-[1.6] lg:mb-[0.6em] md:leading-[1.55555] md:mb-[0.4em]">
                      {" "}
                      Table of contents{" "}
                    </h4>
                    <TocComp contentString={tool.content} />
                    {/* <nav className="mt-4">
                      <ul className="list-none !pl-2 font-medium">
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:text-gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#what-is-seospark"
                          >
                            What is seospark?
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:text-gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#discovering-the-tool"
                          >
                            Discovering the tool
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:text-gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#keyword-discovery"
                          >
                            Keyword Discovery
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:text-gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#keyword-clustering"
                          >
                            Keyword Clustering
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:text-gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#alsoasked"
                          >
                            AlsoAsked
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:text-gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#conclusion"
                          >
                            Conclusion
                          </a>
                        </li>
                      </ul>
                    </nav> */}
                  </div>
                </aside>
              </div>
              <div className="w-full h-px mt-4 bg-gray-600" />
            </div>

            <div className="max-w-6xl px-4 pb-8 mx-auto sm:px-12 lg:px-16">
              <h4 className="mb-6 text-2xl font-bold uppercase dark:text-white">
                Our best products
              </h4>
              <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2">
                <BestProductCard
                  icon={`/products/gainsty-dark.png`}
                  title={`Gainsty`}
                  stars={5}
                  description={`Join 11,000+ Instagram users who use Gainsty to grow their Instagram followers and engagement organically.`}
                  tags={["Instagram", "Followers", "Growth"]}
                  premium={true}
                  slug={"/tool/gainsty"}
                  deals={true}
                  />
                <BestProductCard
                  icon={`/products/liftinfluece-logo.png`}
                  title={`Liftinfluece`}
                  stars={5}
                  description={`Gain Real and Targeted Followers with our platform, Fueling Your Instagram Success.`}
                  tags={[]}
                  premium={false}
                  slug={"/tool/liftinfluece"}
                  deals={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetReview() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-primary-50 dark:bg-gray-800 relative group overflow-hidden flex items-center rounded-lg hover:ring-1 hover:ring-gray-300 dark:hover:ring-primary-500 hover:bg-gray-200/50 dark:hover:bg-gray-800/50">
      <div className="flex-1 px-4 py-5 sm:p-6">
        <Link
          href="https://uneed.lemonsqueezy.com/buy/c89f1f67-ea7f-4008-ab55-bc5b87be58c7"
          rel="noopener noreferrer"
          target="_blank"
          className="focus:outline-none"
          tabIndex={-1}
        >
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
        <SquarePen
          size={24}
          className="w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"
        />
        <ArrowUpRight
          size={16}
          className="w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"
        />
        <p className="text-gray-900 dark:text-white font-semibold text-base my-0">
          Get your own review
        </p>
        <p className="text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0">
          Do you want us to review your product? Click here to get started!
        </p>
      </div>
    </div>
  );
}

function BestProductCard(product: {
  icon: string;
  title: string;
  stars: number;
  description: string;
  tags: string[];
  premium: boolean;
  slug: string;
  deals: boolean;
}) {
  return (
    <div className="relative flex flex-col justify-between transition-all duration-200 ease-in-out transform border rounded-lg group shadow-sand dark:shadow-none dark:bg-ngray-600 bg-primary-50 border-primary-500 dark:border-ngray-600 hover:-translate-y-1">
      {product.deals && (
        <span className="absolute z-10 flex items-center px-1 text-xs font-medium text-green-500 border border-green-500 rounded-full shadow -top-2 right-2 bg-green-50 cursor-default">
          <Banknote size={12} className="mr-1" /> Deals{" "}
        </span>
      )}
      {product.premium && (
        <span
          className="right-[72px] absolute z-10 flex items-center px-1 text-xs font-medium border rounded-full shadow text-primary-500 border-primary-500 -top-2 bg-primary-50 cursor-default"
          // variant="subtle"
        >
          Premium{" "}
        </span>
      )}

      <Link href={`/tool/${product.slug}`} className="">
        <div className="flex items-center p-4 overflow-hidden">
          <a href={`/tool/${product.slug}`} className="" />
          <div className="relative w-[48px] min-w-[48px] h-[48px]">
            <Image
              width={48}
              height={48}
              alt="Logo"
              loading="lazy"
              decoding="async"
              src={product.icon}
              className="w-12 h-12 rounded-[7.5px] _md:group-hover:opacity-0 z-10 text-pr50bg-primary-50"
            />
          </div>
          <div className="flex flex-col flex-1 w-full ml-4">
            <div className="flex items-center justify-between">
              <h3 className="dark:text-primary-500 text-primary-600 font-medium text-base truncate max-w-[calc(100%-48px)]">
                {product.title}
              </h3>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: product.stars }).map((_, i) => (
                <Star key={i} size={12} className="text-[gold] fill-[gold]" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start px-4">
          <p className="dark:text-black text-sm h-[80px] line-clamp-4">
            {product.description}
          </p>
          <div className="flex pt-4 pb-4 space-x-1 overflow-hidden">
            {product.tags.map((tag, i) => (
              <div key={i}>
                <a
                  href={`/tool/${product.slug}`}
                  className="cursor-pointer whitespace-nowrap text-xs text-gray-500 font-medium rounded-md border-black dark:bg-ngray-500 dark:border-gray-800 dark:border-0 dark:hover:text-primary-500 dark:text-ngray-100 hover:underline capitalize"
                >
                  #{tag.replace("-", " ")}
                </a>
                <span className="ml-1 text-xs text-gray-500 opacity-45">•</span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
