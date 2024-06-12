import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generator for Report Cards: Streamlining Teacher Feedback",
  description: "Discover how AI comment generators are revolutionizing the way teachers provide feedback on student report cards. Explore the benefits, features, and best practices for using AI-powered comment generators in education.",
  alternates: {
    canonical: "/blog/post/ai-comment-generator-for-report-cards",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generator for Report Cards: Streamlining Teacher Feedback"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}