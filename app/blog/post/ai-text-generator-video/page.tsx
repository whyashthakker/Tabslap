import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text-to-Video Generator: Bringing Words to Life",
  description: "Discover the incredible world of AI text-to-video generators and how they are revolutionizing the way we create and consume visual content. Learn about the technology behind these generators and their potential applications.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-video",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text-to-Video Generator: Bringing Words to Life"
        datePublished="2024-06-04T08:00:00+00:00"
        dateModified="2024-06-04T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}