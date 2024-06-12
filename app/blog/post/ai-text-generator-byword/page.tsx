import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Byword: The AI Text Generator Revolutionizing Content Creation",
  description: "Explore Byword, the cutting-edge AI text generator that empowers writers, marketers, and businesses to create high-quality content effortlessly.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-byword",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Byword: The AI Text Generator Revolutionizing Content Creation"
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