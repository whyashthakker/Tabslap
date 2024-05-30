import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Story Generator: Unleashing Creativity with Inferkit",
  description: "Discover the power of AI in generating captivating stories with Inferkit's AI Story Generator. Explore how AI is revolutionizing the world of creative writing and storytelling.",
  alternates: {
    canonical: "/blog/post/ai-story-generator-unleashing-creativity-with-inferkit",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Story Generator: Unleashing Creativity with Inferkit"
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