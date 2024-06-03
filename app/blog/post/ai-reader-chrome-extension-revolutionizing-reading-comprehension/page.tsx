import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Reader Chrome Extension: Revolutionizing Reading Comprehension",
  description: "Discover how the AI Reader Chrome Extension enhances reading comprehension, provides real-time insights, and personalizes the reading experience using artificial intelligence.",
  alternates: {
    canonical: "/blog/post/ai-reader-chrome-extension-revolutionizing-reading-comprehension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Reader Chrome Extension: Revolutionizing Reading Comprehension"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}