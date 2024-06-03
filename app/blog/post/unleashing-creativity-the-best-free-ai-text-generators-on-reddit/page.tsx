import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing Creativity: The Best Free AI Text Generators on Reddit",
  description: "Explore the world of free AI text generators through the lens of Reddit, discovering the top tools, their features, and how they empower users to create compelling content effortlessly.",
  alternates: {
    canonical: "/blog/post/unleashing-creativity-the-best-free-ai-text-generators-on-reddit",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing Creativity: The Best Free AI Text Generators on Reddit"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}