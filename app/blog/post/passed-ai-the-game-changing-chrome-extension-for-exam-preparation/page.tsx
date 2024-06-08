import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Passed.AI: The Game-Changing Chrome Extension for Exam Preparation",
  description: "Discover how Passed.AI, an innovative Chrome extension, is revolutionizing exam preparation by providing personalized practice questions, real-time feedback, and AI-powered insights to help students excel in their exams.",
  alternates: {
    canonical: "/blog/post/passed-ai-the-game-changing-chrome-extension-for-exam-preparation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Passed.AI: The Game-Changing Chrome Extension for Exam Preparation"
        datePublished="2024-06-07T08:00:00+00:00"
        dateModified="2024-06-07T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}