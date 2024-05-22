import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Are There AI Comment Generators for Travel and Tourism Blogs?",
  description: "Explore the availability and benefits of AI comment generators specifically designed for travel and tourism blogs, enhancing engagement, providing destination insights, and fostering a vibrant travel community.",
  alternates: {
    canonical: "/blog/post/are-there-ai-comment-generators-for-travel-and-tourism-blogs",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Are There AI Comment Generators for Travel and Tourism Blogs?"
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