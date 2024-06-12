import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator for Books: Transforming the Future of Writing",
  description: "Discover how AI text generators are revolutionizing the book writing process, empowering authors, and shaping the future of literature.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-book",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator for Books: Transforming the Future of Writing"
        datePublished="2024-06-11T00:00:00+00:00"
        dateModified="2024-06-11T00:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}