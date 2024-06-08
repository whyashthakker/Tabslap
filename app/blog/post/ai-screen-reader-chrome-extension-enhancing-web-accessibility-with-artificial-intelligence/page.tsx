import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Screen Reader Chrome Extension: Enhancing Web Accessibility with Artificial Intelligence",
  description: "Discover how the AI Screen Reader Chrome Extension leverages artificial intelligence to improve web accessibility, enabling visually impaired users to navigate and interact with websites seamlessly.",
  alternates: {
    canonical: "/blog/post/ai-screen-reader-chrome-extension-enhancing-web-accessibility-with-artificial-intelligence",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Screen Reader Chrome Extension: Enhancing Web Accessibility with Artificial Intelligence"
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