import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Google's AI Text Generator: Revolutionizing Content Creation",
  description: "Explore how Google's AI Text Generator is transforming the landscape of content creation, offering unprecedented efficiency and creativity.",
  alternates: {
    canonical: "/blog/post/googles-ai-text-generator-revolutionizing-content-creation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Google's AI Text Generator: Revolutionizing Content Creation"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}