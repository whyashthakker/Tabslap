import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generators: Handling Negative Comments Effectively",
  description: "Discover how AI comment generators can effectively handle negative comments on social media platforms. Learn about the strategies and techniques employed to address criticism and maintain a positive brand image.",
  alternates: {
    canonical: "/blog/post/ai-comment-generators-handling-negative-comments-effectively",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generators: Handling Negative Comments Effectively"
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