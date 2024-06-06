import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Email Writer Chrome Extension: Effortlessly Craft Professional Emails with AI",
  description: "Discover how the AI Email Writer Chrome Extension is revolutionizing email communication by using artificial intelligence to generate professional, personalized, and engaging email content.",
  alternates: {
    canonical: "/blog/post/ai-email-writer-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Email Writer Chrome Extension: Effortlessly Craft Professional Emails with AI"
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