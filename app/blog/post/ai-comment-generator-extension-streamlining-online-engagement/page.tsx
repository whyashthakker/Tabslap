import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generator Extension: Streamlining Online Engagement",
  description: "Discover how the AI Comment Generator Extension revolutionizes online engagement by automatically generating relevant and engaging comments.",
  alternates: {
    canonical: "/blog/post/ai-comment-generator-extension-streamlining-online-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generator Extension: Streamlining Online Engagement"
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