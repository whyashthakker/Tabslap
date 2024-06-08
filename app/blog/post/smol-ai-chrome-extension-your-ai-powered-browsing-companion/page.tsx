import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Smol AI Chrome Extension: Your AI-Powered Browsing Companion",
  description: "Discover how the Smol AI Chrome Extension enhances your browsing experience with intelligent features, personalized recommendations, and productivity tools.",
  alternates: {
    canonical: "/blog/post/smol-ai-chrome-extension-your-ai-powered-browsing-companion",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Smol AI Chrome Extension: Your AI-Powered Browsing Companion"
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