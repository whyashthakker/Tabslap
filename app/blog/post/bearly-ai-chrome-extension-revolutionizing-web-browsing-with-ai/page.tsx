import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Bearly AI Chrome Extension: Revolutionizing Web Browsing with AI",
  description: "Discover how the Bearly AI Chrome Extension is transforming the way we browse the web, providing AI-powered features for enhanced productivity and efficiency.",
  alternates: {
    canonical: "/blog/post/bearly-ai-chrome-extension-revolutionizing-web-browsing-with-ai",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Bearly AI Chrome Extension: Revolutionizing Web Browsing with AI"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}