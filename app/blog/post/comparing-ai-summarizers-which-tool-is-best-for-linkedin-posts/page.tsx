import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Comparing AI Summarizers: Which Tool is Best for LinkedIn Posts?",
  description: "Discover the best AI summarizers for LinkedIn posts. We compare the top tools in terms of accuracy, ease of use, and features to help you choose the perfect summarizer for your needs.",
  alternates: {
    canonical: "/blog/post/comparing-ai-summarizers-which-tool-is-best-for-linkedin-posts",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Comparing AI Summarizers: Which Tool is Best for LinkedIn Posts?"
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