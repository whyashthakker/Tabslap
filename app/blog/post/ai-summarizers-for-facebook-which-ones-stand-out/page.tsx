import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Summarizers for Facebook: Which Ones Stand Out?",
  description: "Discover the top AI summarizers for Facebook posts and comments. We compare the best tools based on accuracy, features, and ease of use to help you choose the perfect summarizer.",
  alternates: {
    canonical: "/blog/post/ai-summarizers-for-facebook-which-ones-stand-out",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Summarizers for Facebook: Which Ones Stand Out?"
        datePublished="2024-05-25T08:00:00+00:00"
        dateModified="2024-05-25T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}