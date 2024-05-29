import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Using AI to Optimize Social Media Advertising Campaigns",
  description: "Learn how AI can help optimize your social media advertising campaigns, improve targeting, automate ad creation, and maximize ROI.",
  alternates: {
    canonical: "/blog/post/using-ai-to-optimize-social-media-advertising-campaigns",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Using AI to Optimize Social Media Advertising Campaigns"
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