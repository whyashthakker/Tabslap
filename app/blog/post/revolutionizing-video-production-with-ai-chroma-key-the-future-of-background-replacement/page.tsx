import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Video Production with AI Chroma Key: The Future of Background Replacement",
  description: "Discover how AI chroma key technology is transforming video production and post-production workflows. Learn about the advancements, applications, and benefits of using AI-powered chroma key for seamless background replacement.",
  alternates: {
    canonical: "/blog/post/revolutionizing-video-production-with-ai-chroma-key-the-future-of-background-replacement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Video Production with AI Chroma Key: The Future of Background Replacement"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}