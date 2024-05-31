import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Writing with the Copy.ai Chrome Extension: Your Ultimate Writing Companion",
  description: "Discover how the Copy.ai Chrome Extension transforms your writing process, making it faster, smarter, and more efficient. From generating ideas to optimizing content, learn how this powerful tool can help you create compelling copy with ease.",
  alternates: {
    canonical: "/blog/post/revolutionizing-writing-with-the-copy-ai-chrome-extension-your-ultimate-writing-companion",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Writing with the Copy.ai Chrome Extension: Your Ultimate Writing Companion"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}