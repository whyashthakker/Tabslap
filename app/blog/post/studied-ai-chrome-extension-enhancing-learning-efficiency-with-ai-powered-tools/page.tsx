import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Studied AI Chrome Extension: Enhancing Learning Efficiency with AI-Powered Tools",
  description: "Discover how the Studied AI Chrome Extension revolutionizes learning by providing AI-powered tools, personalized recommendations, and interactive features.",
  alternates: {
    canonical: "/blog/post/studied-ai-chrome-extension-enhancing-learning-efficiency-with-ai-powered-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Studied AI Chrome Extension: Enhancing Learning Efficiency with AI-Powered Tools"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}