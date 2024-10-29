"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

import { unified } from "unified";
import remarkParse from "remark-parse";
import { toc } from "mdast-util-toc";
import remarkRehype from "remark-rehype";
import { useEffect, useState } from "react";
import { toHtml } from "hast-util-to-html";

// function extractMarkdownContent(input: string): string {
//   // Extract the markdown content between backticks
//   const contentMatch = input.match(/`([\s\S]*?)`/);
//   if (contentMatch && contentMatch[1]) {
//     return contentMatch[1].trim();
//   } else {
//     throw new Error("Could not extract markdown content");
//   }
// }

async function convertMarkdownToc(input: string): Promise<string> {
  const markdownContent = input // extractMarkdownContent(input);

  // Generate the TOC from the markdown AST
  const tocProcessor = unified().use(remarkParse).use(remarkGfm);

  const tree = tocProcessor.parse(markdownContent) as any;
  const processedTree = (await tocProcessor.run(tree)) as any;

  const tocResult = toc(processedTree, { maxDepth: 3 });

  if (!tocResult.map) {
    throw new Error("No table of contents found");
  }

  // Convert the TOC mdast node to HAST (HTML AST)
  const tocHast = await unified()
    .use(remarkRehype)
    .use(rehypeSlug) // Ensure headings in TOC have IDs
    .run(tocResult.map as any);

  // Convert the HAST node to HTML string
  const tocHtml = toHtml(tocHast);

  return tocHtml;
}

async function getToc(contentString: string) {
  try {
    return await convertMarkdownToc(contentString);
  } catch (error) {
    console.error(error);
    return ""
  }
}

export const BlogPost = ({ contentString }: any) => {
  // Step 1: Extract the markdown content
  const contentMatch = contentString // contentString.match(/`([\s\S]*?)`/);
  
  if (!contentMatch || contentMatch.length < 2) {
    return <div>Error: Invalid content format.</div>;
  }

  // Step 2: Get the markdown content and clean it
  const markdownContent = contentMatch// contentMatch[1].trim();

  // Step 3: Ensure [toc] placeholder is included
  //   if (!markdownContent.includes("[toc]")) {
  //     markdownContent = "[toc]\n\n" + markdownContent;
  //   }

  // Step 4: Render the markdown with TOC
  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkGfm,
        [remarkToc, { heading: "Table of Contents", maxDepth: 3 }],
      ]}
      rehypePlugins={[rehypeSlug]}
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

export const TocComp = ({ contentString }: { contentString: string }) => {
  const [tocContent, setTocContent] = useState("");

  useEffect(() => {
    const gtc = async () => {
      const tocHtml = await getToc(contentString);
      
      setTocContent(tocHtml || "");
    };
    gtc();
  }, [contentString]);

  return (
    <nav
      className="mt-4 toc-nav"
      dangerouslySetInnerHTML={{
        __html: tocContent,
      }}
    />
  );
};
