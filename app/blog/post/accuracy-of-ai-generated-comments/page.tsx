import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Accuracy of AI-Generated Comments: Separating Fact from Fiction",
  description: "Explore the accuracy of AI-generated comments and understand the factors that influence their quality. Learn about the advancements, limitations, and best practices for ensuring accurate and relevant AI-powered commenting.",
  alternates: {
    canonical: "/blog/post/accuracy-of-ai-generated-comments",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Accuracy of AI-Generated Comments: Separating Fact from Fiction"
        datePublished="2024-05-16T08:00:00+00:00"
        dateModified="2024-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}