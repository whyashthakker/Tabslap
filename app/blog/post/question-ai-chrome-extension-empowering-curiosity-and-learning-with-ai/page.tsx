import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Question AI Chrome Extension: Empowering Curiosity and Learning with AI",
  description: "Explore how the Question AI Chrome Extension is revolutionizing the way we ask questions and learn online, providing AI-powered answers and insights.",
  alternates: {
    canonical: "/blog/post/question-ai-chrome-extension-empowering-curiosity-and-learning-with-ai",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Question AI Chrome Extension: Empowering Curiosity and Learning with AI"
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