import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator for Video: Revolutionizing Video Content Creation",
  description: "Discover how AI text generators are transforming video content creation, making it easier and faster to produce engaging and informative videos.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-for-video-revolutionizing-video-content-creation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator for Video: Revolutionizing Video Content Creation"
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