import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Market Research: Gaining Valuable Insights",
  description: "Discover the power of social media as a valuable tool for market research. Learn effective strategies and techniques for leveraging social media platforms to gather insights, understand customer preferences, and make data-driven business decisions.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-market-research",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Market Research: Gaining Valuable Insights"
        datePublished="2024-05-13T08:00:00+00:00"
        dateModified="2024-05-13T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}