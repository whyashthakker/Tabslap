import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Top AI Comment Generators in 2024: Enhancing Social Media Engagement",
  description: "Discover the best AI comment generators of 2024 that are revolutionizing social media engagement. Learn about their features, benefits, and how they can help you streamline your commenting process.",
  alternates: {
    canonical: "/blog/post/top-ai-comment-generators-2024",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Top AI Comment Generators in 2024: Enhancing Social Media Engagement"
        datePublished="2024-05-16T08:00:00+00:00"
        dateModified="2024-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}