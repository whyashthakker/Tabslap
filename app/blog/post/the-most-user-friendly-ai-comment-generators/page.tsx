import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Most User-Friendly AI Comment Generators in 2024",
  description: "Discover the most user-friendly AI comment generators that make social media engagement effortless. Learn about their key features, benefits, and how they can streamline your commenting process.",
  alternates: {
    canonical: "/blog/post/the-most-user-friendly-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Most User-Friendly AI Comment Generators in 2024"
        datePublished="2024-05-23T08:00:00+00:00"
        dateModified="2024-05-23T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}