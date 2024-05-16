import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "What is an AI Comment Generator? Understanding the Basics",
  description: "Discover what an AI comment generator is, how it works, and its potential applications in social media marketing and engagement.",
  alternates: {
    canonical: "/blog/post/what-is-an-ai-comment-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="What is an AI Comment Generator? Understanding the Basics"
        datePublished="2023-05-16T08:00:00+00:00"
        dateModified="2023-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}