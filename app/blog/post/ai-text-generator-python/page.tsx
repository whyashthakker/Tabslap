import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator with Python: Create Compelling Content Effortlessly",
  description: "Discover how to build an AI-powered text generator using Python. Learn the concepts, libraries, and techniques to generate coherent and engaging text content with ease.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-python",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator with Python: Create Compelling Content Effortlessly"
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