import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Growing Your YouTube Channel Organically with AI-Powered Summaries",
  description: "Discover how AI-powered summaries can help you grow your YouTube channel organically, attract more viewers, and increase engagement on your videos.",
  alternates: {
    canonical: "/blog/post/growing-your-youtube-channel-organically-with-ai-powered-summaries",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Growing Your YouTube Channel Organically with AI-Powered Summaries"
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