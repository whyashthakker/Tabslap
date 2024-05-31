import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "From Words to Visuals: Harnessing the Power of AI Text-to-Image Generation",
  description: "Explore the fascinating world of AI text-to-image generation and discover how this groundbreaking technology is transforming the way we create and visualize content. Learn about the latest advancements, applications, and the potential impact of AI-powered text-to-image generation on various industries.",
  alternates: {
    canonical: "/blog/post/from-words-to-visuals-harnessing-the-power-of-ai-text-to-image-generation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="From Words to Visuals: Harnessing the Power of AI Text-to-Image Generation"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}