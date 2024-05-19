import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Olly.social: The Ultimate Reddit Summarizer for Efficient Content Consumption",
  description: "Discover how Olly.social, the AI-powered Reddit summarizer, revolutionizes the way you consume Reddit content by providing concise summaries and sentiment analysis.",
  alternates: {
    canonical: "/blog/post/olly-social-the-ultimate-reddit-summarizer",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Olly.social: The Ultimate Reddit Summarizer for Efficient Content Consumption"
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