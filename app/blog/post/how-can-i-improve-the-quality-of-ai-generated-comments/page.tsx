import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Can I Improve the Quality of AI-Generated Comments?",
  description: "Discover effective strategies and best practices for enhancing the quality of AI-generated comments, ensuring relevance, coherence, and user engagement.",
  alternates: {
    canonical: "/blog/post/how-can-i-improve-the-quality-of-ai-generated-comments",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Can I Improve the Quality of AI-Generated Comments?"
        datePublished="2024-05-21T08:00:00+00:00"
        dateModified="2024-05-21T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}