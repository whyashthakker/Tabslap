import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "What Are the Uses of AI Comment Generators in Sports Marketing?",
  description: "Explore the various applications and benefits of AI comment generators in sports marketing, from fan engagement to brand promotion and sentiment analysis.",
  alternates: {
    canonical: "/blog/post/what-are-the-uses-of-ai-comment-generators-in-sports-marketing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="What Are the Uses of AI Comment Generators in Sports Marketing?"
        datePublished="2024-05-21T08:00:00+00:00"
        dateModified="2024-05-21T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}