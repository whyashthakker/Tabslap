import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Editing AI-Generated Comments: Maintaining Control and Quality",
  description: "Discover the possibilities and benefits of editing AI-generated comments before posting. Learn how to maintain control over your brand's voice and ensure the quality of your social media interactions.",
  alternates: {
    canonical: "/blog/post/editing-ai-generated-comments-maintaining-control-and-quality",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Editing AI-Generated Comments: Maintaining Control and Quality"
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