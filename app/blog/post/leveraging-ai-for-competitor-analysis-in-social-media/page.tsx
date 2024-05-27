import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Leveraging AI for Competitor Analysis in Social Media",
  description: "Discover how AI tools can help you gain a competitive edge by analyzing your rivals' social media strategies, content performance, and audience insights.",
  alternates: {
    canonical: "/blog/post/leveraging-ai-for-competitor-analysis-in-social-media",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Leveraging AI for Competitor Analysis in Social Media"
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