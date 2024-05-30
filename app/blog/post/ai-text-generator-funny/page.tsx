import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator: Unleashing the Hilarity with AI-Powered Humor",
  description: "Discover the world of AI text generators that specialize in creating hilarious and witty content. Learn how these AI tools can inject humor into your writing and entertain your audience.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-funny",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator: Unleashing the Hilarity with AI-Powered Humor"
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