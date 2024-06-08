import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Best AI Text Generator 2024: Top Picks for Effortless Content Creation",
  description: "Discover the best AI text generators of 2024 that can help you create high-quality content effortlessly. From blog posts to social media captions, these tools have you covered.",
  alternates: {
    canonical: "/blog/post/best-ai-text-generator-2024",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Best AI Text Generator 2024: Top Picks for Effortless Content Creation"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}