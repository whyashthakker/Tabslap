import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Are There AI Comment Generators Specifically for Instagram?",
  description: "Discover if there are AI comment generators designed specifically for Instagram. Learn how these specialized tools can help you boost engagement, save time, and optimize your Instagram presence.",
  alternates: {
    canonical: "/blog/post/are-there-ai-comment-generators-specifically-for-instagram",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Are There AI Comment Generators Specifically for Instagram?"
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