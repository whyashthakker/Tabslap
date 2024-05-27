import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Maximizing Clubhouse Organic Growth with AI Summarization",
  description: "Learn how AI summarization can help you boost your organic growth on Clubhouse, engage your audience, and establish your authority in your niche.",
  alternates: {
    canonical: "/blog/post/maximizing-clubhouse-organic-growth-with-ai-summarization",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Maximizing Clubhouse Organic Growth with AI Summarization"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}