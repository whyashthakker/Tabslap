import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator API: Harness the Power of AI for Your Applications",
  description: "Discover the potential of AI text generator APIs and learn how to integrate them into your applications for powerful content generation capabilities.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-api",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator API: Harness the Power of AI for Your Applications"
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