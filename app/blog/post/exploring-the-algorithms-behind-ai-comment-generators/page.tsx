import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exploring the Algorithms Behind AI Comment Generators",
  description: "Dive into the world of AI comment generators and discover the powerful algorithms that enable personalized, contextual, and engaging interactions.",
  alternates: {
    canonical: "/blog/post/exploring-the-algorithms-behind-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exploring the Algorithms Behind AI Comment Generators"
        datePublished="2024-05-22T08:00:00+00:00"
        dateModified="2024-05-22T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}