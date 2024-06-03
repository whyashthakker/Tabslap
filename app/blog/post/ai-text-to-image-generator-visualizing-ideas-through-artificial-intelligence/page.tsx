import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text to Image Generator: Visualizing Ideas Through Artificial Intelligence",
  description: "Discover the amazing capabilities of AI text to image generators, which transform written descriptions into stunning visual representations.",
  alternates: {
    canonical: "/blog/post/ai-text-to-image-generator-visualizing-ideas-through-artificial-intelligence",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text to Image Generator: Visualizing Ideas Through Artificial Intelligence"
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