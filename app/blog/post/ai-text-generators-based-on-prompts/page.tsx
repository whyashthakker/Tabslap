import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "10 Best AI Text Generators for Creating Content from Prompts",
  description: "Discover the 10 best AI text generators that can create high-quality content based on your prompts. Streamline your content creation process and save time with these powerful tools.",
  alternates: {
    canonical: "/blog/post/ai-text-generators-based-on-prompts",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="10 Best AI Text Generators for Creating Content from Prompts"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}