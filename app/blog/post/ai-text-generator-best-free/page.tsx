import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator: Discover the Best Free Options for Your Needs",
  description: "Explore the best free AI text generators available, their features, benefits, and how they can help you create high-quality content efficiently.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-best-free",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator: Discover the Best Free Options for Your Needs"
        datePublished="2024-06-11T00:00:00+00:00"
        dateModified="2024-06-11T00:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}