import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Whiteboard AI: The Intelligent Chrome Extension for Visual Collaboration",
  description: "Discover Whiteboard AI, the smart Chrome extension that revolutionizes visual collaboration. Learn how Whiteboard AI can help you brainstorm ideas, create diagrams, and collaborate seamlessly with your team.",
  alternates: {
    canonical: "/blog/post/whiteboard-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Whiteboard AI: The Intelligent Chrome Extension for Visual Collaboration"
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