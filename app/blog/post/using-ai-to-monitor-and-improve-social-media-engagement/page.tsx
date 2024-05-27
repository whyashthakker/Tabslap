import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Using AI to Monitor and Improve Social Media Engagement",
  description: "Learn how AI tools can help you track, analyze, and optimize your social media engagement, driving better results and building stronger connections with your audience.",
  alternates: {
    canonical: "/blog/post/using-ai-to-monitor-and-improve-social-media-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Using AI to Monitor and Improve Social Media Engagement"
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