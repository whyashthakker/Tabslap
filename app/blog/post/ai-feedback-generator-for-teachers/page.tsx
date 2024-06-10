import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Feedback Generator for Teachers: Enhancing Student Learning",
  description: "Explore how AI feedback generators are empowering teachers to provide personalized and actionable feedback to students. Discover the benefits, features, and best practices for leveraging AI-powered feedback tools in education.",
  alternates: {
    canonical: "/blog/post/ai-feedback-generator-for-teachers",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Feedback Generator for Teachers: Enhancing Student Learning"
        datePublished="2023-06-10T08:00:00+00:00"
        dateModified="2023-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}