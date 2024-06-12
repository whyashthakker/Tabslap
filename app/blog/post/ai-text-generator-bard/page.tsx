import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Google Bard: The AI Text Generator Shaping the Future of Content Creation",
  description: "Discover Google Bard, the groundbreaking AI text generator developed by Google, and explore its impact on content creation, marketing, and SEO.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-bard",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Google Bard: The AI Text Generator Shaping the Future of Content Creation"
        datePublished="2024-06-11T00:00:00+00:00"
        dateModified="2024-06-11T00:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}