import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Enhancing Content Moderation with AI Comment Generators",
  description: "Discover how AI comment generators are revolutionizing content moderation, making it more efficient, accurate, and scalable for online platforms.",
  alternates: {
    canonical: "/blog/post/enhancing-content-moderation-with-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Enhancing Content Moderation with AI Comment Generators"
        datePublished="2024-05-18T08:00:00+00:00"
        dateModified="2024-05-18T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}