import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Tips for Organic Growth on Reddit with the Help of AI Summarizers",
  description: "Discover how AI summarizers can help you achieve organic growth on Reddit, boost engagement, and build a strong community presence.",
  alternates: {
    canonical: "/blog/post/tips-for-organic-growth-on-reddit-with-ai-summarizers",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Tips for Organic Growth on Reddit with the Help of AI Summarizers"
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