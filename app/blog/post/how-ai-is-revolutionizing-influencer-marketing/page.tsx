import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How AI is Revolutionizing Influencer Marketing",
  description: "Discover how AI is transforming the influencer marketing landscape, enabling brands to identify the right influencers, optimize campaigns, and measure ROI effectively.",
  alternates: {
    canonical: "/blog/post/how-ai-is-revolutionizing-influencer-marketing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How AI is Revolutionizing Influencer Marketing"
        datePublished="2024-05-28T08:00:00+00:00"
        dateModified="2024-05-28T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}