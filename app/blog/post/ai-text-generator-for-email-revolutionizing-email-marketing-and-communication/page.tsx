import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator for Email: Revolutionizing Email Marketing and Communication",
  description: "Discover how AI text generators are transforming email marketing and communication, enabling businesses to create personalized, engaging, and effective email content at scale.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-for-email-revolutionizing-email-marketing-and-communication",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator for Email: Revolutionizing Email Marketing and Communication"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}