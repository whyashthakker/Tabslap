import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Ask AI Chrome Extension: Get Instant Answers with Artificial Intelligence",
  description: "Discover the Ask AI Chrome Extension and how it can provide instant answers to your questions using artificial intelligence. Learn about its features, benefits, and how to install it on your Chrome browser.",
  alternates: {
    canonical: "/blog/post/ask-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Ask AI Chrome Extension: Get Instant Answers with Artificial Intelligence"
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