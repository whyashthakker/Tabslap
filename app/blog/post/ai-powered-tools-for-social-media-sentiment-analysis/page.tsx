import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI-Powered Tools for Social Media Sentiment Analysis",
  description: "Explore how AI-powered sentiment analysis tools can help you gauge public opinion, monitor brand reputation, and make data-driven decisions for your social media strategy.",
  alternates: {
    canonical: "/blog/post/ai-powered-tools-for-social-media-sentiment-analysis",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI-Powered Tools for Social Media Sentiment Analysis"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}