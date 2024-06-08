import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Apollo.ai Chrome Extension: Unleashing the Power of AI in Your Browser",
  description: "Discover how the Apollo.ai Chrome Extension is revolutionizing web browsing with AI-powered features, enhancing productivity, and transforming the user experience.",
  alternates: {
    canonical: "/blog/post/apollo-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Apollo ai Chrome Extension: Unleashing the Power of AI in Your Browser"
        datePublished="2024-06-06T08:00:00+00:00"
        dateModified="2024-06-06T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}