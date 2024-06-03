import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Swordfish AI Chrome Extension: Enhancing Web Browsing with AI-Powered Features",
  description: "Discover how the Swordfish AI Chrome Extension is transforming web browsing with AI-powered features for enhanced productivity, privacy, and user experience.",
  alternates: {
    canonical: "/blog/post/swordfish-ai-chrome-extension-enhancing-web-browsing-with-ai-powered-features",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Swordfish AI Chrome Extension: Enhancing Web Browsing with AI-Powered Features"
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