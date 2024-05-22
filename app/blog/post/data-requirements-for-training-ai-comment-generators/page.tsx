import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Data Requirements for Training AI Comment Generators",
  description: "Explore the key data requirements and considerations for training effective and reliable AI comment generators.",
  alternates: {
    canonical: "/blog/post/data-requirements-for-training-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Data Requirements for Training AI Comment Generators"
        datePublished="2024-05-22T08:00:00+00:00"
        dateModified="2024-05-22T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}