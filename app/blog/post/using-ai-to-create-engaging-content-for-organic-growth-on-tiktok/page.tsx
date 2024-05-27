import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Using AI to Create Engaging Content for Organic Growth on TikTok",
  description: "Discover how AI can help you create captivating content and boost your organic growth on TikTok, the fastest-growing social media platform.",
  alternates: {
    canonical: "/blog/post/using-ai-to-create-engaging-content-for-organic-growth-on-tiktok",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Using AI to Create Engaging Content for Organic Growth on TikTok"
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