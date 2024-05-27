import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Grow Organically on Quora Using AI-Enhanced Answers",
  description: "Learn how to leverage AI tools to create compelling, informative answers on Quora, boosting your visibility, credibility, and organic growth on the platform.",
  alternates: {
    canonical: "/blog/post/how-to-grow-organically-on-quora-using-ai-enhanced-answers",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Grow Organically on Quora Using AI-Enhanced Answers"
        datePublished="2024-05-25T08:00:00+00:00"
        dateModified="2024-05-25T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}