import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Claude AI Chrome Extension: Unleashing the Power of AI in Your Browser",
  description: "Discover the Claude AI Chrome Extension and how it can supercharge your browsing experience with artificial intelligence. Learn about its features, benefits, and how to download and install it.",
  alternates: {
    canonical: "/blog/post/claude-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Claude AI Chrome Extension: Unleashing the Power of AI in Your Browser"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}