import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text-to-Generator: Transforming Text into Realistic Images",
  description: "Discover the power of AI text-to-generator models and how they can transform textual descriptions into realistic images. Explore the technology behind these models and their potential applications.",
  alternates: {
    canonical: "/blog/post/ai-text-to-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text-to-Generator: Transforming Text into Realistic Images"
        datePublished="2023-06-04T08:00:00+00:00"
        dateModified="2023-06-04T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}