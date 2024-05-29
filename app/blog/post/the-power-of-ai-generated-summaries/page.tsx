import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of AI-Generated Summaries: Enhancing Content Comprehension and Efficiency",
  description: "Explore the benefits of AI-generated summaries and how they revolutionize content comprehension and efficiency. Discover the techniques and applications of AI-powered summarization.",
  alternates: {
    canonical: "/blog/post/the-power-of-ai-generated-summaries",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of AI-Generated Summaries: Enhancing Content Comprehension and Efficiency"
        datePublished="2023-05-29T08:00:00+00:00"
        dateModified="2023-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}