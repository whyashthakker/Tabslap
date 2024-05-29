import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Easy Tagging: Simplify Content Organization and Discovery",
  description: "Learn how easy tagging can help you organize and discover content efficiently. Explore the benefits, best practices, and tools for implementing a simple tagging system.",
  alternates: {
    canonical: "/blog/post/easy-tagging",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Easy Tagging: Simplify Content Organization and Discovery"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}