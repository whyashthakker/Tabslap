import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator: How BuzzFeed Revolutionizes Content Creation",
  description: "Discover how BuzzFeed leverages AI text generators to create engaging content and revolutionize the media industry.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-buzzfeed",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator: How BuzzFeed Revolutionizes Content Creation"
        datePublished="2024-06-11T00:00:00+00:00"
        dateModified="2024-06-11T00:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}