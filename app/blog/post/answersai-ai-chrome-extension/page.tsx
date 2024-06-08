import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AnswersAI.ai Chrome Extension: Your Personal AI Assistant for the Web",
  description: "Discover how the AnswersAI.ai Chrome Extension is transforming web browsing with AI-powered answers, recommendations, and automation, making your online experience more efficient and intelligent.",
  alternates: {
    canonical: "/blog/post/answersai-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AnswersAI ai Chrome Extension: Your Personal AI Assistant for the Web"
        datePublished="2024-06-06T08:00:00+00:00"
        dateModified="2024-06-06T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}