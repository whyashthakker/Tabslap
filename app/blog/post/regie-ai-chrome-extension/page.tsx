import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Regie.ai: The Smart Chrome Extension for Effortless Web Automation",
  description: "Discover Regie.ai, the intelligent Chrome extension that uses AI to automate repetitive tasks, boost productivity, and enhance your browsing experience.",
  alternates: {
    canonical: "/blog/post/regie-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Regie.ai: The Smart Chrome Extension for Effortless Web Automation"
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