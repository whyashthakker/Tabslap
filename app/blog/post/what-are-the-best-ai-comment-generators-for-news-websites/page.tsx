import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "What Are the Best AI Comment Generators for News Websites?",
  description: "Discover the top AI comment generators designed specifically for news websites, enhancing reader engagement, moderation efficiency, and discussion quality.",
  alternates: {
    canonical: "/blog/post/what-are-the-best-ai-comment-generators-for-news-websites",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="What Are the Best AI Comment Generators for News Websites?"
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