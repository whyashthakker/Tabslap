import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Measuring the ROI of Your Social Media Efforts: Metrics and Strategies for Success",
  description: "Learn how to effectively measure the return on investment (ROI) of your social media efforts. Discover key metrics, strategies, and tools to track and optimize your social media performance and demonstrate its impact on your business goals.",
  alternates: {
    canonical: "/blog/post/measuring-the-roi-of-your-social-media-efforts",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Measuring the ROI of Your Social Media Efforts: Metrics and Strategies for Success"
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