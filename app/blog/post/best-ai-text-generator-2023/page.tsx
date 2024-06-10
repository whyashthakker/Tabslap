import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Best AI Text Generator 2023: Unleashing the Power of Generative AI",
  description: "Discover the best AI text generators of 2023 and how they are transforming content creation, writing, and communication. Explore the features, benefits, and use cases of these powerful tools.",
  alternates: {
    canonical: "/blog/post/best-ai-text-generator-2023",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Best AI Text Generator 2023: Unleashing the Power of Generative AI"
        datePublished="2023-06-10T08:00:00+00:00"
        dateModified="2023-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}