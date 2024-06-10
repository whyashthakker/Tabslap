import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator for Website: Revolutionizing Web Content Creation",
  description: "Discover how AI text generators are transforming website content creation, enabling businesses to generate high-quality, engaging, and SEO-friendly content at scale.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-for-website-revolutionizing-web-content-creation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator for Website: Revolutionizing Web Content Creation"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}