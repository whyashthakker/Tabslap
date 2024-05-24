import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Best AI Comment Generators for Small Businesses in 2024",
  description: "Discover the top AI comment generators tailored for small businesses. Learn how these tools can help you enhance your social media engagement and grow your online presence.",
  alternates: {
    canonical: "/blog/post/the-best-ai-comment-generators-for-small-businesses",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Best AI Comment Generators for Small Businesses in 2024"
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