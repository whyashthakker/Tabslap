import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator for Business: Empowering Enterprises with Efficient Content Creation",
  description: "Explore how AI text generators are revolutionizing content creation for businesses, enabling them to generate high-quality, engaging, and brand-specific content at scale.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-for-business-empowering-enterprises-with-efficient-content-creation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator for Business: Empowering Enterprises with Efficient Content Creation"
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