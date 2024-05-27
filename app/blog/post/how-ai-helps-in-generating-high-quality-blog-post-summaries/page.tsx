import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How AI Helps in Generating High-Quality Blog Post Summaries",
  description: "Discover how AI tools can create accurate, engaging, and time-saving summaries for your blog posts, enhancing user experience and driving more traffic.",
  alternates: {
    canonical: "/blog/post/how-ai-helps-in-generating-high-quality-blog-post-summaries",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How AI Helps in Generating High-Quality Blog Post Summaries"
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