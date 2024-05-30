import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Generator Text Detector: Identifying Machine-Generated Content",
  description: "Learn how AI generator text detectors can help identify machine-generated content and maintain the integrity of online information. Discover the best tools and techniques for detecting AI-generated text.",
  alternates: {
    canonical: "/blog/post/ai-generator-text-detector",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Generator Text Detector: Identifying Machine-Generated Content"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}