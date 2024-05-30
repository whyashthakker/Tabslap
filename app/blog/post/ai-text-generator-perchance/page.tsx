import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator: Perchance - Unleashing Creative Writing",
  description: "Explore the world of AI text generation with Perchance, a powerful tool that unleashes your creative writing potential. Discover how Perchance can help you overcome writer's block and generate unique and engaging content.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-perchance",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator: Perchance - Unleashing Creative Writing"
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