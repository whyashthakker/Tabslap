import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI in Social Media Analytics: Tools and Techniques",
  description: "Discover how AI is transforming social media analytics, empowering businesses with powerful tools and techniques to gain insights, understand audiences, and optimize strategies.",
  alternates: {
    canonical: "/blog/post/ai-in-social-media-analytics-tools-and-techniques",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI in Social Media Analytics: Tools and Techniques"
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