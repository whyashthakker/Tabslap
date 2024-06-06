import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Email AI Chrome Extension: Revolutionizing Email Communication with AI",
  description: "Discover how the Email AI Chrome Extension is transforming email communication with AI-powered features, including smart compose, email prioritization, and intelligent email management.",
  alternates: {
    canonical: "/blog/post/email-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Email AI Chrome Extension: Revolutionizing Email Communication with AI"
        datePublished="2023-06-06T08:00:00+00:00"
        dateModified="2023-06-06T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}