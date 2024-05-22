import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "What Innovations Are Expected in AI Comment Generation?",
  description: "Explore the exciting future of AI comment generation, from advanced natural language processing to emotional intelligence and multimodal integration.",
  alternates: {
    canonical: "/blog/post/what-innovations-are-expected-in-ai-comment-generation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="What Innovations Are Expected in AI Comment Generation?"
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