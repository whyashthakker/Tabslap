import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Organic Pinterest Growth Strategies Enhanced by AI Summarization Tools",
  description: "Discover how AI summarization tools can supercharge your organic growth on Pinterest, drive more traffic, and boost your brand's visibility.",
  alternates: {
    canonical: "/blog/post/organic-pinterest-growth-strategies-enhanced-by-ai-summarization-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Organic Pinterest Growth Strategies Enhanced by AI Summarization Tools"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}