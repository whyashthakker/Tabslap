import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Ejoy AI: The Chrome Extension for Enhanced Browsing Happiness",
  description: "Discover Ejoy AI, the innovative Chrome extension that uses artificial intelligence to elevate your browsing experience and bring more joy to your online activities.",
  alternates: {
    canonical: "/blog/post/ejoy-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Ejoy AI: The Chrome Extension for Enhanced Browsing Happiness"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}