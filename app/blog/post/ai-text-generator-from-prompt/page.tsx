import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator from Prompt: Unleash the Power of AI-Driven Content Creation",
  description: "Discover the potential of AI text generators that create content from prompts. Learn how these tools can streamline your writing process and boost your creativity.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-from-prompt",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator from Prompt: Unleash the Power of AI-Driven Content Creation"
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