import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Travel AI Chrome Extension: Your Personal Travel Companion",
  description: "Discover the revolutionary Travel AI Chrome Extension that simplifies your travel planning and enhances your overall journey with AI-powered features.",
  alternates: {
    canonical: "/blog/post/travel-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Travel AI Chrome Extension: Your Personal Travel Companion"
        datePublished="2024-06-07T08:00:00+00:00"
        dateModified="2024-06-07T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}