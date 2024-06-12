import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Transforming Content with AI Text Generator Changer: Empowering Writers and Marketers",
  description: "Discover how AI text generator changer tools are empowering writers and marketers to transform existing content, improve quality, and boost productivity.",
  alternates: {
    canonical: "/blog/post/transforming-content-with-ai-text-generator-changer",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Transforming Content with AI Text Generator Changer: Empowering Writers and Marketers"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}