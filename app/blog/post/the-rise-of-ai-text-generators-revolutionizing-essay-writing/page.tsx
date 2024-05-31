import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Rise of AI Text Generators: Revolutionizing Essay Writing",
  description: "Explore the impact of AI text generators on essay writing and how they are transforming the way students and professionals approach writing tasks. Discover the benefits, challenges, and future implications of using AI-powered tools for generating essays.",
  alternates: {
    canonical: "/blog/post/the-rise-of-ai-text-generators-revolutionizing-essay-writing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Rise of AI Text Generators: Revolutionizing Essay Writing"
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