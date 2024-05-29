import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Post Summarizer: Streamlining Content Consumption for Busy Readers",
  description: "Discover how AI post summarizers are revolutionizing content consumption, helping busy readers quickly grasp the key points of articles and save valuable time.",
  alternates: {
    canonical: "/blog/post/ai-post-summarizer-streamlining-content-consumption",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Post Summarizer: Streamlining Content Consumption for Busy Readers"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}