import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Final Round AI: The Ultimate Chrome Extension for Job Interview Preparation",
  description: "Discover how Final Round AI, a powerful Chrome extension, is revolutionizing job interview preparation by providing personalized practice, real-time feedback, and intelligent insights to help candidates ace their interviews.",
  alternates: {
    canonical: "/blog/post/final-round-ai-the-ultimate-chrome-extension-for-job-interview-preparation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Final Round AI: The Ultimate Chrome Extension for Job Interview Preparation"
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