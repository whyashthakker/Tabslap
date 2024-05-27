import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Top AI Summarization Tools for Summarizing Podcast Transcripts",
  description: "Discover the best AI summarization tools for efficiently summarizing podcast transcripts, saving time and extracting key insights from lengthy audio content.",
  alternates: {
    canonical: "/blog/post/top-ai-summarization-tools-for-summarizing-podcast-transcripts",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Top AI Summarization Tools for Summarizing Podcast Transcripts"
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