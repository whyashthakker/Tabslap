import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Mastering AI Text Generator Prompts: Unlocking the Power of Language Models",
  description: "Learn how to craft effective prompts for AI text generators and unlock the full potential of language models. Discover tips, techniques, and best practices for generating high-quality text.",
  alternates: {
    canonical: "/blog/post/mastering-ai-text-generator-prompts-unlocking-the-power-of-language-models",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Mastering AI Text Generator Prompts: Unlocking the Power of Language Models"
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