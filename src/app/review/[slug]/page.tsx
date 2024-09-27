/* eslint-disable react/no-unescaped-entities */
import { TOOLS } from "@/lib/mockToolsData";
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
  const tool = TOOLS.find((tool) => tool.slug === slug);
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
  const seo_description = generateSeoDescription(
    "We've tested seospark.io, the Keyword Research & Automation tool for SEO professionals"
  );

  return {
    title: `FunFun.tool: ${tool?.name} - review`,
    description: seo_description,
    alternates: {
      canonical: `https://new-vercel-project-vert.vercel.app/tool/${slug}`,
    },
    openGraph: {
      // images: tool?.mainImageUrl || "",
      images: [tool?.mainImageUrl || "", ...previousImages],
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
                href="/"
                className="router-link-active flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-500"
              >
                <ArrowLeft size={16} /> Go Back{" "}
              </Link>
              <h1 className="mt-8 text-3xl font-bold tracking-tight dark:text-primary-500 sm:text-4xl lg:text-5xl xl:text-6xl">
                seospark.io Review - Boost your SEO in 2024
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-500 dark:text-gray-400 current-post-excerpt lg:text-xl">
                We've tested seospark.io, the Keyword Research &amp; Automation
                tool for SEO professionals
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8 current-post-tags-wrapper lg:mt-10">
                <span className="text-sm text-gray-400 current-post-publish-date">
                  <time title="09/16/2024">September 16, 2024</time>
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
                      src="https://www.uneed.best/_ipx/_/reviews/seospark.jpg"
                      className="object-cover w-full h-auto !mt-0 border rounded-lg border-primary-500 dark:border-ngray-600"
                    />
                  )}
                  <div>
                    <p>Welcome to our seospark review!</p>
                    <p>
                      This review is a bit special for us, as seospark is a
                      product that perfectly aligns with FollowersTool: keyword
                      research and data-driven SEO are at the core of our
                      marketing strategy, and it's thanks to this that we exist
                      today!
                    </p>
                    <p>
                      We will therefore try to go as far as possible in our
                      exploration of seospark 🚀
                    </p>
                    <h2
                      id="what-is-seospark"
                      className="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
                    >
                      <a
                        aria-current="page"
                        href="/blog/seo-spark-review#what-is-seospark"
                        className="router-link-active router-link-exact-active group"
                      >
                        <div className="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute">
                          <span
                            className="iconify i-heroicons:hashtag-20-solid w-4 h-4 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        What is seospark?
                      </a>
                    </h2>
                    <p>
                      According to their landing page, seospark offers "
                      <strong>
                        keyword research and content strategy development for
                        data-driven&nbsp;SEO.
                      </strong>
                      ". But it's much more than that! seospark is a
                      comprehensive SEO tool that combines keyword research,
                      content strategy development, and performance tracking all
                      in one platform.
                    </p>
                    <p>
                      At its core, seospark provides a suite of features
                      designed to help businesses - like us - and marketers
                      optimize their online presence. These include keyword
                      discovery, which helps you find new content ideas that
                      rank on Google, keyword gap analysis to identify
                      opportunities your competitors are exploiting but you're
                      not, and SERP-based keyword clustering to group related
                      keywords effectively. The tool also offers rank tracking
                      capabilities, allowing you to monitor your SEO performance
                      over time.
                    </p>
                    <p>
                      That's a lot of features, right? Let's dive into each of
                      them!
                    </p>
                    <h2
                      id="discovering-the-tool"
                      className="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
                    >
                      <a
                        aria-current="page"
                        href="/blog/seo-spark-review#discovering-the-tool"
                        className="router-link-active router-link-exact-active group"
                      >
                        <div className="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute">
                          <span
                            className="iconify i-heroicons:hashtag-20-solid w-4 h-4 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        Discovering the tool
                      </a>
                    </h2>
                    <p>
                      Once our account is created, we arrive at the dashboard,
                      which will surprise you with its originality!
                    </p>
                    {/* <p>
                      <Image
                        width={649}
                        height={365}
                        alt="seospark dashboard"
                        className=""
                        src="https://www.uneed.best/_ipx/_/reviews/seospark_1.png"
                      />
                    </p> */}
                    <p>
                      I admit I was a bit confused at first. Then, after taking
                      the time to read and understand the interface, I quickly
                      got used to it. It even helped me understand how the tool
                      was structured!
                    </p>
                    <p>
                      Without further ado, let's investigate the keywords
                      "product launch" 👀
                    </p>
                    <h2
                      id="keyword-discovery"
                      className="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
                    >
                      <a
                        aria-current="page"
                        href="/blog/seo-spark-review#keyword-discovery"
                        className="router-link-active router-link-exact-active group"
                      >
                        <div className="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute">
                          <span
                            className="iconify i-heroicons:hashtag-20-solid w-4 h-4 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        Keyword Discovery
                      </a>
                    </h2>
                    {/* <p>
                      <Image
                        alt="seospark keyword discovery"
                        className=""
                        src="https://www.uneed.best/_ipx/_/reviews/seospark_2.png"
                      />
                    </p> */}
                    <p>
                      There are a lot of data in this screenshot. To name a few:
                    </p>
                    <ul>
                      <li>
                        <strong>Keywords list</strong>: The tool displays a list
                        of keywords related to the search term "product launch".
                        This list includes the keyword itself, its search
                        volume, and the keyword difficulty.
                      </li>
                      <li>
                        <strong>Search volume</strong>: This metric indicates
                        how many times a keyword is searched for on Google each
                        month. The higher the search volume, the more potential
                        traffic you can attract by ranking for that keyword.
                      </li>
                      <li>
                        <strong>Difficulty and CPC</strong>: The keyword
                        difficulty score estimates how hard it is to rank for a
                        keyword, while the cost-per-click (CPC) metric shows how
                        much advertisers are willing to pay for a click on that
                        keyword.
                      </li>
                      <li>
                        <strong>Intent</strong>: This one is very interesting.
                        It tells you the intent behind the keyword, which can
                        help you understand what users are looking for when they
                        search for that term, eg commercial, informational, or
                        transactional.
                      </li>
                      <li>
                        <strong>SERP Items</strong>: These icons show the
                        features that appear on the search engine results page
                        (SERP) for that keyword, such as featured snippets,
                        knowledge panels, images, related searches, etc.
                      </li>
                    </ul>
                    <p>Let's move on to the next step: creating a cluster!</p>
                    <h2
                      id="keyword-clustering"
                      className="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
                    >
                      <a
                        aria-current="page"
                        href="/blog/seo-spark-review#keyword-clustering"
                        className="router-link-active router-link-exact-active group"
                      >
                        <div className="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute">
                          <span
                            className="iconify i-heroicons:hashtag-20-solid w-4 h-4 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        Keyword Clustering
                      </a>
                    </h2>
                    {/* <p>
                      <Image
                        alt="seospark keyword cluster config"
                        className=""
                        src="https://www.uneed.best/_ipx/_/reviews/seospark_3.png"
                      />
                    </p> */}
                    <p>
                      One of the key features of seospark is its{" "}
                      <strong>keyword clustering</strong> capability.
                    </p>
                    <p>
                      I had to do some research to provide a clear definition
                      😅, so let me explain it simply:
                    </p>
                    <p>
                      Keyword clustering is a technique used in SEO to group
                      related keywords together. It helps in organizing content
                      and optimizing websites more effectively. Instead of
                      creating separate pages for each keyword variation,
                      clustering{" "}
                      <strong>
                        allows you to target groups of related keywords
                      </strong>{" "}
                      with a single piece of content!
                    </p>
                    <p>
                      seospark uses an advanced algorithm to cluster keywords
                      based on <strong>SERP</strong> (Search Engine Results
                      Page) overlap. This means it groups keywords that tend to
                      show similar search results, indicating that search
                      engines consider these terms closely related.
                    </p>
                    <p>Incredible, right? 😍</p>
                    <p>
                      Once we've defined all the parameters for our cluster, we
                      need to wait for a minute or two to get the results. Just
                      enough time to make a coffee! ☕
                    </p>
                    {/* <p>
                      <Image
                        alt="seospark keyword cluster results"
                        className=""
                        src="https://www.uneed.best/_ipx/_/reviews/seospark_4.png"
                      />
                    </p> */}
                    <p>
                      I've cropped the screenshot, but the results screen
                      displays clusters for all the selected keywords. We can
                      see some incredibly valuable information here: the
                      questions we need to answer to rank effectively.
                    </p>
                    <p>
                      This feature is a game-changer for content creation.
                      seospark doesn't just group related keywords; it provides
                      insights into the user intent behind these searches. By
                      showing us the questions that are frequently associated
                      with our keyword clusters, the tool is essentially giving
                      us a roadmap for creating comprehensive, highly relevant
                      content 🤩!
                    </p>
                    <p>
                      But wait, I've spotted something very interesting in the
                      screenshot 🕵🏻. We can analyze our own domain!
                    </p>
                    <p>
                      If you enter your own domain name, you'll gain access to
                      additional valuable information such as your ranking URLs
                      and their positions in the search results.
                    </p>
                    {/* <p>
                      <Image
                        alt="seospark keyword cluster results domain"
                        className=""
                        src="https://www.uneed.best/_ipx/_/reviews/seospark_5.png"
                      />
                    </p> */}
                    <p>But wait, there's more...!</p>
                    <h2
                      id="alsoasked"
                      className="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
                    >
                      <a
                        aria-current="page"
                        href="/blog/seo-spark-review#alsoasked"
                        className="router-link-active router-link-exact-active group"
                      >
                        <div className="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute">
                          <span
                            className="iconify i-heroicons:hashtag-20-solid w-4 h-4 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        AlsoAsked
                      </a>
                    </h2>
                    <p>
                      Thanks to the "AlsoAsked" tool, you can harness the power
                      of Google's "People Also Asked" section 🤯
                    </p>
                    <p>Let's try it out with the keyword "online marketing":</p>
                    {/* <p>
                      <Image
                        alt="seospark alsoasked"
                        className=""
                        src="https://www.uneed.best/_ipx/_/reviews/seospark_6.png"
                      />
                    </p> */}
                    <p>After waiting a few minutes, here are the results:</p>
                    {/* <p>
                      <Image
                        alt="seospark alsoasked results"
                        className=""
                        src="https://www.uneed.best/_ipx/_/reviews/seospark_7.png"
                      />
                    </p> */}
                    <h2
                      id="conclusion"
                      className="scroll-mt-[calc(48px+48px+var(--header-height))] lg:scroll-mt-[calc(48px+var(--header-height))]"
                    >
                      <a
                        aria-current="page"
                        href="/blog/seo-spark-review#conclusion"
                        className="router-link-active router-link-exact-active group"
                      >
                        <div className="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:lg:opacity-100 transition-opacity absolute">
                          <span
                            className="iconify i-heroicons:hashtag-20-solid w-4 h-4 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        Conclusion
                      </a>
                    </h2>
                    <p>
                      This concludes our seospark review and Wow, it really
                      packs a punch! 🥊 After exploring its main features,
                      here's what stands out:
                    </p>
                    <ul>
                      <li>
                        <strong>Keyword Discovery</strong>: Great for finding
                        new content ideas and understanding search intent.
                      </li>
                      <li>
                        <strong>Keyword Clustering</strong>: Super helpful for
                        organizing your content strategy.
                      </li>
                      <li>
                        <strong>Domain Analysis</strong>: Gives you a clear
                        picture of where your site stands in search results.
                      </li>
                      <li>
                        <strong>AlsoAsked</strong>: A goldmine for content
                        creation, tapping into real user questions.
                      </li>
                    </ul>
                    <p>
                      There's definitely a learning curve if you're not
                      comfortable with SEO, but once you are, it's pretty
                      powerful and intuitive.
                    </p>
                    <p>
                      Is seospark worth it in 2024? If you're serious about SEO
                      and content marketing, I'd say definitely yes! It's
                      especially great for growing startups and SEO
                      professionals who want to save time and make data-driven
                      decisions.
                    </p>
                    <p>
                      Overall, seospark gets a thumbs up from us at
                      FollowersTool 👍!
                    </p>

                    <GetReview />
                  </div>
                </article>

                <aside className="hidden col-span-1 lg:flex lg:flex-col">
                  <div className="sticky top-16">
                    <h4 className="text-lg font-normal tracking-wider uppercase text-[#111827] dark:text-gray-400 lg:mt-16 lg:leading-[1.6] lg:mb-[0.6em] md:leading-[1.55555] md:mb-[0.4em]">
                      {" "}
                      Table of contents{" "}
                    </h4>
                    <nav className="mt-4">
                      <ul className="list-none !pl-2 font-medium">
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#what-is-seospark"
                          >
                            What is seospark?
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#discovering-the-tool"
                          >
                            Discovering the tool
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#keyword-discovery"
                          >
                            Keyword Discovery
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#keyword-clustering"
                          >
                            Keyword Clustering
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#alsoasked"
                          >
                            AlsoAsked
                          </a>
                        </li>
                        <li className="toc-list border-b border-transparent hover:border-black mb-2">
                          <a
                            className="text-black_ text-primary-500 hover:gray-900 block text-base _text-white !no-underline transition-colors duration-75"
                            role="button"
                            href="#conclusion"
                          >
                            Conclusion
                          </a>
                        </li>
                      </ul>
                    </nav>
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
                  icon={`https://apcdouatoejrvwoqevfc.supabase.co/storage/v1/object/public/logos/logos/1726575899942-icon.png`}
                  title={`Startup Spotlight`}
                  stars={5}
                  description={`Discover & Share Trending Micro-Startups. Promote yours for $0.`}
                  tags={["newsletter", "indie-making"]}
                  premium={true}
                  deals={true}
                />
                <BestProductCard
                  icon={`https://apcdouatoejrvwoqevfc.supabase.co/storage/v1/object/public/logos/logos/1707906157850-Groupe1410103862.jpg`}
                  title={`Marketing Strategy Generator`}
                  stars={5}
                  description={`Perfect marketing strategy for your product in 5 minutes. Done by AI for busy Solopreneurs. Updated for 2024.`}
                  tags={[]}
                  premium={false}
                  deals={false}
                />
                <BestProductCard
                  icon={`https://apcdouatoejrvwoqevfc.supabase.co/storage/v1/object/public/logos/logos/indexplease_20240305121521.png`}
                  title={`IndexPlease`}
                  stars={5}
                  description={`IndexPlease will automatically index your pages on Google, Microsoft Bing, Naver, Seznam.cz and Yandex within 48 hours.`}
                  tags={[]}
                  premium={false}
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

      <Link href="/tool/startup-spotlight" className="">
        <div className="flex items-center p-4 overflow-hidden">
          <a href="/tool/startup-spotlight" className="" />
          <div className="relative w-[48px] min-w-[48px] h-[48px]">
            <Image
              width={48}
              height={48}
              alt="Logo"
              loading="lazy"
              decoding="async"
              src={product.icon}
              className="w-12 h-12 rounded-[7.5px] md:group-hover:opacity-0 z-10 text-pr50bg-primary-50"
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
                <Star
                  key={i}
                  size={12}
                  className="text-gray-400 fill-gray-400"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start px-4">
          <p className="dark:text-gray-50 text-sm h-[80px] line-clamp-4">
            {product.description}
          </p>
          <div className="flex pt-4 pb-4 space-x-1 overflow-hidden">
            {product.tags.map((tag, i) => (
              <div key={i}>
                <a
                  href={`/tags/${tag}`}
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
