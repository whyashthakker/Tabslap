import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "What Types of Comments Can olly.ai / justdone ai Generate?",
  description: "Discover the different types of comments that olly.ai / justdone ai can generate for your social media posts. From engagement-boosting comments to personalized replies, learn how olly.ai / justdone ai can help you optimize your social media presence.",
  alternates: {
    canonical: "/blog/post/what-types-of-comments-can-justdoneai-generate",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="What Types of Comments Can olly.ai / justdone ai Generate?"
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