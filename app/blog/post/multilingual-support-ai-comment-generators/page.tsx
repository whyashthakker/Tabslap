import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Multilingual Support in AI Comment Generators: Engaging a Global Audience",
  description: "Discover the multilingual capabilities of AI comment generators and how they enable engagement with a global audience. Learn about the benefits, challenges, and best practices for leveraging AI-powered commenting in multiple languages.",
  alternates: {
    canonical: "/blog/post/multilingual-support-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Multilingual Support in AI Comment Generators: Engaging a Global Audience"
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