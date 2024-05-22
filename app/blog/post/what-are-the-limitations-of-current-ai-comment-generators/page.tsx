import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "What Are the Limitations of Current AI Comment Generators?",
  description: "Explore the current limitations and challenges of AI comment generators, including technical, ethical, and practical considerations that impact their effectiveness and adoption.",
  alternates: {
    canonical: "/blog/post/what-are-the-limitations-of-current-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="What Are the Limitations of Current AI Comment Generators?"
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