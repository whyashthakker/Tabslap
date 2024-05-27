import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use AI to Get the Most Out of TikTok Comments",
  description: "Discover how to leverage AI tools and techniques to effectively analyze and extract insights from TikTok comments, helping you engage with your audience and grow your presence on the platform.",
  alternates: {
    canonical: "/blog/post/how-to-use-ai-to-get-the-most-out-of-tiktok-comments",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use AI to Get the Most Out of TikTok Comments"
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