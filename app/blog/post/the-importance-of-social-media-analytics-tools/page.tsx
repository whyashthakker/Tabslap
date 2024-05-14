import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Importance of Social Media Analytics Tools",
  description: "Discover why social media analytics tools are essential for businesses to measure performance, gain insights, and make data-driven decisions. Learn about the key metrics, benefits, and best practices for using social media analytics effectively.",
  alternates: {
    canonical: "/blog/post/the-importance-of-social-media-analytics-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Importance of Social Media Analytics Tools"
        datePublished="2024-05-14T08:00:00+00:00"
        dateModified="2024-05-14T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}