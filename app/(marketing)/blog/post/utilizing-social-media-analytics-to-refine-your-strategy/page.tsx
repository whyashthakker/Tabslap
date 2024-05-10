import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Utilizing Social Media Analytics to Refine Your Strategy: Data-Driven Insights",
  description: "Learn how to leverage social media analytics to gain valuable insights, refine your strategy, and optimize your social media performance. Discover the key metrics to track and analyze for data-driven decision making.",
  alternates: {
    canonical: "/blog/post/utilizing-social-media-analytics-to-refine-your-strategy",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Utilizing Social Media Analytics to Refine Your Strategy: Data-Driven Insights"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}