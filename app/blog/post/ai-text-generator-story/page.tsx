import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator: Crafting Compelling Stories with AI",
  description: "Discover the power of AI text generators in crafting compelling stories. Learn how AI can assist writers in creating engaging narratives and explore the best AI story generators available.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-story",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator: Crafting Compelling Stories with AI"
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