import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Copilot AI Chrome Extension: Your AI-Powered Browsing Companion",
  description: "Discover the Copilot AI Chrome Extension and how it can revolutionize your browsing experience with artificial intelligence. Learn about its features, benefits, and how to download and install it.",
  alternates: {
    canonical: "/blog/post/copilot-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Copilot AI Chrome Extension: Your AI-Powered Browsing Companion"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}