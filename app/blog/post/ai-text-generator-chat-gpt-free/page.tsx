import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Chat GPT Free: Unleashing the Power of Conversational AI",
  description: "Explore the world of free AI text generator Chat GPT and discover how it revolutionizes conversational AI, enabling natural and engaging interactions.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-chat-gpt-free",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Chat GPT Free: Unleashing the Power of Conversational AI"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}