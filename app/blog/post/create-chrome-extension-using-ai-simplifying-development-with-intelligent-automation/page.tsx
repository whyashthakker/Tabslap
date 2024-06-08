import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Create Chrome Extension Using AI: Simplifying Development with Intelligent Automation",
  description: "Learn how to create powerful and intelligent Chrome extensions using AI, streamlining the development process and unlocking new possibilities.",
  alternates: {
    canonical: "/blog/post/create-chrome-extension-using-ai-simplifying-development-with-intelligent-automation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Create Chrome Extension Using AI: Simplifying Development with Intelligent Automation"
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