import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Olly.social: The Game-Changing Hackernews Summarizer for Efficient Content Consumption",
  description: "Discover how Olly.social, the AI-powered Hackernews summarizer, revolutionizes the way you consume Hackernews content by providing concise summaries and sentiment analysis.",
  alternates: {
    canonical: "/blog/post/olly-social-the-game-changing-hackernews-summarizer",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Olly.social: The Game-Changing Hackernews Summarizer for Efficient Content Consumption"
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