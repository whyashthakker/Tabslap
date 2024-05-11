import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Customer Research: Gaining Valuable Insights",
  description: "Learn how to leverage social media platforms to conduct effective customer research and gain valuable insights into your target audience's preferences, behaviors, and opinions. Discover strategies, tools, and best practices for social media listening and analysis.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-customer-research",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Customer Research: Gaining Valuable Insights"
        datePublished="2024-05-11T08:00:00+00:00"
        dateModified="2024-05-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}