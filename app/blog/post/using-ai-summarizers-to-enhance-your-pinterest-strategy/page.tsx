import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Using AI Summarizers to Enhance Your Pinterest Strategy",
  description: "Discover how AI summarizers can revolutionize your Pinterest strategy, helping you create compelling pin descriptions, analyze user comments, and drive engagement on the platform.",
  alternates: {
    canonical: "/blog/post/using-ai-summarizers-to-enhance-your-pinterest-strategy",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Using AI Summarizers to Enhance Your Pinterest Strategy"
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