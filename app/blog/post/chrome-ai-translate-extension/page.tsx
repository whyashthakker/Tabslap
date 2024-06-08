import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Chrome AI Translate Extension: Bridging Language Barriers with Artificial Intelligence",
  description: "Discover the revolutionary Chrome AI Translate Extension that harnesses the power of AI to provide seamless, accurate, and context-aware language translation across the web.",
  alternates: {
    canonical: "/blog/post/chrome-ai-translate-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Chrome AI Translate Extension: Bridging Language Barriers with Artificial Intelligence"
        datePublished="2024-06-07T08:00:00+00:00"
        dateModified="2024-06-07T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}