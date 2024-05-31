import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exploring Free AI Text Generators on Reddit: A Comprehensive Guide",
  description: "Discover the world of free AI text generators through the lens of Reddit. Learn about the top AI writing tools recommended by the Reddit community, their features, benefits, and how to make the most of them for your writing needs.",
  alternates: {
    canonical: "/blog/post/exploring-free-ai-text-generators-on-reddit-a-comprehensive-guide",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exploring Free AI Text Generators on Reddit: A Comprehensive Guide"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}