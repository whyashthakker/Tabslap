import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Content Consumption with GPT-Powered Post Summarization",
  description: "Discover how GPT-powered post summarizers are transforming the way we consume online content by providing concise summaries and sentiment analysis.",
  alternates: {
    canonical: "/blog/post/revolutionizing-content-consumption-with-gpt-powered-post-summarization",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Content Consumption with GPT-Powered Post Summarization"
        datePublished="2024-05-19T08:00:00+00:00"
        dateModified="2024-05-19T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}