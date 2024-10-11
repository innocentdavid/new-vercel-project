import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Fragment } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata, ResolvingMetadata } from "next";
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
  const tool = tools_details.find((tool) => tool.slug === slug);
  return tool;
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const slug = decodeURLString(params.slug);
  const tool = await getToolBySlug(slug);
  // const tool_review = tools_review.find(t => t.slug === tool?.slug)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  // const seo_description = generateSeoDescription(tool?.excerpt!);
  const seo_description = generateSeoDescription(tool?.hero_sub_heading||"");

  return {
    title: `FunFun.tool: ${tool?.name}`,
    description: seo_description,
    alternates: {
      canonical: `https://new-vercel-project-vert.vercel.app/tool/${slug}`,
    },
    openGraph: {
      // images: tool?.main_image || "",
      images: [tool?.main_image || "", ...previousImages],
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURLString(params.slug);
  const tool = await getToolBySlug(slug);
  if (!tool) return notFound();

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="p-4 flex items-center gap-3">
        <Link href={`/`} className="underline decoration-blue-500">
          Home
        </Link>{" "}
        <div>/</div> <div className="capitalize">{tool.name}</div>
      </div>

      <div className="py-12">
        <section
          className="flex flex-col md:items-center lg:items-start md:flex-row gap-8"
          id="hero"
        >
          <div className="w-full lg:w-[30%] grid gap-8">
            <div className="">
              <h1 className="text-4xl font-bold leading-[1.333334] capitalize">
                {tool.name}
              </h1>
              <p className="text-gray-600 text-sm">
                Added on {new Date(tool.added_on).toLocaleDateString()}
              </p>

              <div className="flex items-center mt-4 gap-4">
                <Link href={`/review/${tool.slug}`}>
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white h-fit">
                    See our Review
                  </Button>
                </Link>

                <Link href={tool.siteLink || "https://"+tool.slug+".com"} target="_blank">
                  <Button className="ring-2 ring-pink-500 bg-transparent text-black hover:bg-pink-600 hover:text-white dark:text-white h-fit">
                    Open Website
                  </Button>
                </Link>

                {/* <Link href={`/review/${tool.slug}`}>
                  <button className="bg-[#F0F4F8] dark:bg-[#181A1C] hover:bg-[#DDE7EE] dark:hover:bg-[#32383E] px-4 py-[0.375rem] rounded-[150px]">
                    <p className="text-[0.875rem]">⭐️</p>
                  </button>
                </Link> */}
              </div>

              {/* <div className="flex space-x-2 mt-2">
                {tool?.socialMediaHandles?.map((social) => (
                  <a
                    key={social}
                    href={`${social}`}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                ))}
              </div> */}
            </div>

            <div className="grid gap-4">
              <h2 className="text-3xl font-bold leading-[1.333334]">
                What is <span className="capitalize">{tool.name}</span>?
              </h2>

              <p className="text-lg">{tool.hero_sub_heading}</p>
            </div>
          </div>

          <div className="w-full lg:w-[70%]">
            <Image
              src={tool.main_image || ""}
              alt=""
              width={900}
              height={700}
              className=" w-full h-auto rounded-[16px]"
            />
          </div>
        </section>

        <Divider />

        <div className="mt-8 space-y-8">
          <section className="grid gap-4" id="features">
            <h2 className="my-[30px] text-3xl font-bold">
              Features of <span className="capitalize">{tool.name}</span>
            </h2>
            <Card>
              <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {tool?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg
                      className="text-[1.5rem] min-w-6 max-w-6 min-h-6 max-h-6"
                      fill="#10b981"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="VerifiedRoundedIcon"
                    >
                      <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zM9.38 16.01 7 13.61a.9959.9959 0 0 1 0-1.41l.07-.07c.39-.39 1.03-.39 1.42 0l1.61 1.62 5.15-5.16c.39-.39 1.03-.39 1.42 0l.07.07c.39.39.39 1.02 0 1.41l-5.92 5.94c-.41.39-1.04.39-1.44 0" />
                    </svg>

                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-4" id="useCases">
            <h2 className="my-[30px] text-3xl font-bold">
              Use Cases of <span className="capitalize">{tool.name}</span>
            </h2>

            <Card>
              <CardContent className="p-4">
                <div className="py-[6px]">
                  {tool.use_cases?.map((useCase, index) => (
                    <Fragment key={index}>
                      <div className="flex flex-col md:flex-row md:items-center px-3 py-1 gap-2 md:gap-6 my-6 md:my-0">
                        <h3 className="font-semibold mb-2">#{index + 1}</h3>
                        <p>{useCase}</p>
                      </div>
                      {tool.use_cases.length != index + 1 && (
                        <Divider className="my-[6px]" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-4" id="pricing">
            <h2 className="my-[30px] text-3xl font-bold">
              Pricing of <span className="capitalize">{tool.name}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tool.prices?.map((tier, index) => (
                <PricingTier
                  key={index}
                  title={tier.plan}
                  price={tier?.price}
                  features={tier.features}
                  buttonText="Sign up"
                />
              ))}
            </div>
          </section>

          <section className="grid gap-4" id="faq">
            <div className="mt-8">
              <h2 className="my-[30px] text-3xl font-bold">
                <span className="capitalize">{tool.name}</span> Frequently Asked
                Questions
              </h2>

              <Card>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {tool.faq?.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="hover:bg-slate-100 dark:hover:bg-[#171A1C] px-4 my-[6px]"
                      >
                        <AccordionTrigger className="text-lg text-start">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {/* <Button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white text-base">
                View &nbsp;<span className="capitalize">{tool.name}</span>
                &nbsp; Alternatives
              </Button> */}
            </div>
          </section>

          {/* <section className="grid gap-4" id="badges">
            <div className="mt-8">
              <h2 className="my-[30px] text-3xl font-bold">
                Launch Badges for{" "}
                <span className="capitalize">{tool.name}</span>
              </h2>

              <Card>
                <CardContent className="flex flex-col md:flex-row items-center gap-4 p-4">
                  <p className="text-center md:text-start">
                    Use the following badges to drive support from your
                    community for your launch. High stared tools are more likely
                    to be featured on the homepage and in our newsletters.
                  </p>

                  <div className="flex flex-col items-center space-y-4 p-6 rounded-lg">
                    <Tabs
                      defaultValue="neutral"
                      className="w-full max-w-[300px]"
                    >
                      <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
                        <TabsTrigger value="light" className="text-zinc-400">
                          Light
                        </TabsTrigger>
                        <TabsTrigger value="neutral" className="text-zinc-400">
                          Neutral
                        </TabsTrigger>
                        <TabsTrigger value="dark" className="text-zinc-400">
                          Dark
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>

                    <Card className="w-full max-w-[300px] bg-white p-2 flex items-center space-x-2">
                      <div className="flex items-center justify-center">
                        <span className="text-4xl">🥳</span>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs text-pink-500 font-semibold">
                          FEATURED ON
                        </p>
                        <p className="text-pink-500 font-extrabold">
                          FollowersTool
                        </p>
                      </div>
                      <div className="text-pink-500 text-xl">★</div>
                    </Card>

                    <CopyComp str="tool">
                      <Button
                        variant="secondary"
                        className="w-full max-w-[300px] bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                      >
                        <ClipboardCopy className="w-4 h-4 mr-2" />
                        Copy Code Snippet
                      </Button>
                    </CopyComp>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
}

function Divider({ className }: { className?: string }) {
  return (
    <hr
      className={cn(
        "relative flex items-stretch flex-shrink-0 bg-[rgba(99_107_116_/_0.2)] my-8 border-none",
        className
      )}
      style={{
        blockSize: "1px",
      }}
    />
  );
}

const PricingTier = ({
  title,
  price,
  features,
  buttonText,
}: {
  title: string;
  price: string | number;
  features: string[];
  buttonText: string;
}) => (
  <Card className="w-full max-w-sm flex flex-col items-stretch justify-between gap-[0.75rem] p-4">
    <div className="">
      <CardHeader className="p-0 space-y-0 m-0 gap-0">
        <p className="text-lg font-medium leading-[1.33334]">{title}</p>
        <CardTitle className="text-[2rem] font-bold text-[#171A1C] dark:text-white leading-[1.5]">
          {price === 0 ? <span>Free</span> : <span>${price}</span>}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 grid gap-2">
        <Divider className="my-2" />

        <ul className="py-[6px]">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-[16px] text-[#555E68] dark:text-[#F8F8FC] text-sm py-1 px-3"
            >
              <svg
                className="min-w-5 h-5"
                fill="#ec4899"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FiberManualRecordTwoToneIcon"
              >
                <path
                  d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6"
                  opacity=".3"
                />
                <path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8m0-14c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6" />
              </svg>

              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </div>

    <CardFooter className="p-0">
      <Button
        variant={"outline"}
        className="w-full border-[#9d174d] text-[#9d174d] hover:bg-[#9d174d] dark:text-[#fbcfe8]"
      >
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);
