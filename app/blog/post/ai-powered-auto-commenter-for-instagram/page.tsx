import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI-Powered Auto Commenter for Instagram: Boost Engagement and Reach",
  description: "Discover how an AI-powered auto commenter for Instagram can revolutionize your social media strategy, boost engagement, and expand your reach on the platform.",
  alternates: {
    canonical: "/blog/post/ai-powered-auto-commenter-for-instagram",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI-Powered Auto Commenter for Instagram: Boost Engagement and Reach"
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