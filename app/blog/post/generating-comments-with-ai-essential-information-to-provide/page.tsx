import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Generating Comments with AI: Essential Information to Provide",
  description: "Discover the essential information you need to provide to generate effective comments using AI comment generators. Learn how to optimize your input for accurate and engaging comment generation.",
  alternates: {
    canonical: "/blog/post/generating-comments-with-ai-essential-information-to-provide",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Generating Comments with AI: Essential Information to Provide"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}