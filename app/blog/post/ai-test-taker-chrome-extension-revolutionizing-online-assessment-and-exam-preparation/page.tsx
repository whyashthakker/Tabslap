import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Test Taker Chrome Extension: Revolutionizing Online Assessment and Exam Preparation",
  description: "Discover how the AI Test Taker Chrome Extension transforms online assessment and exam preparation, empowering students with intelligent tools and personalized learning experiences.",
  alternates: {
    canonical: "/blog/post/ai-test-taker-chrome-extension-revolutionizing-online-assessment-and-exam-preparation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Test Taker Chrome Extension: Revolutionizing Online Assessment and Exam Preparation"
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