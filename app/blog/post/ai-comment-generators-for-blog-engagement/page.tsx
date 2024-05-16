import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Leveraging AI Comment Generators for Blog Engagement",
  description: "Explore the potential of using AI comment generators to enhance engagement on your blog posts. Discover the benefits, best practices, and considerations for implementing AI-powered commenting on your blog.",
  alternates: {
    canonical: "/blog/post/ai-comment-generators-for-blog-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Leveraging AI Comment Generators for Blog Engagement"
        datePublished="2023-05-16T08:00:00+00:00"
        dateModified="2023-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}