import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Browse AI: The Ultimate Chrome Extension for AI-Powered Web Browsing",
  description: "Discover Browse AI, the revolutionary Chrome extension that enhances your web browsing experience with artificial intelligence. Learn how Browse AI can help you find relevant information, automate tasks, and boost your productivity.",
  alternates: {
    canonical: "/blog/post/browse-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Browse AI: The Ultimate Chrome Extension for AI-Powered Web Browsing"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}