import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Training AI Comment Generators to Understand Your Brand's Voice",
  description: "Learn how to effectively train AI comment generators to understand and replicate your brand's unique voice. Discover best practices and strategies for consistent and on-brand comment generation.",
  alternates: {
    canonical: "/blog/post/training-ai-comment-generators-to-understand-your-brands-voice",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Training AI Comment Generators to Understand Your Brand's Voice"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}