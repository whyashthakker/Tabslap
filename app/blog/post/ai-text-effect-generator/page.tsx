import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Effect Generator: Creating Stunning Visual Text",
  description: "Discover the world of AI text effect generators and how they can help you create stunning visual text for your designs and projects. Explore the benefits, features, and top AI text effect generators available.",
  alternates: {
    canonical: "/blog/post/ai-text-effect-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Effect Generator: Creating Stunning Visual Text"
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