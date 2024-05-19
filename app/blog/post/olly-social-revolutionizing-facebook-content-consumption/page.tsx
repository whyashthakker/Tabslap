import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Olly.social: Revolutionizing Facebook Content Consumption with AI-Powered Post Summarization",
  description: "Discover how Olly.social, the AI-powered Facebook post summarizer, transforms the way you consume Facebook content by providing concise summaries and sentiment analysis.",
  alternates: {
    canonical: "/blog/post/olly-social-revolutionizing-facebook-content-consumption",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Olly.social: Revolutionizing Facebook Content Consumption with AI-Powered Post Summarization"
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