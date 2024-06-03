import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Lavender AI Chrome Extension: Enhancing Web Browsing with AI-Powered Tools",
  description: "Discover how the Lavender AI Chrome Extension revolutionizes your web browsing experience with AI-powered tools for productivity, personalization, and privacy.",
  alternates: {
    canonical: "/blog/post/lavender-ai-chrome-extension-enhancing-web-browsing-with-ai-powered-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Lavender AI Chrome Extension: Enhancing Web Browsing with AI-Powered Tools"
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