import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "A Step-by-Step Guide to Using an AI Comment Generator",
  description: "Learn how to effectively use an AI comment generator to enhance your social media engagement. Follow this step-by-step guide to set up and optimize your AI-powered commenting strategy.",
  alternates: {
    canonical: "/blog/post/how-to-use-ai-comment-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="A Step-by-Step Guide to Using an AI Comment Generator"
        datePublished="2024-05-16T08:00:00+00:00"
        dateModified="2024-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}