import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Plus AI Chrome Extension: Enhancing Productivity with AI-Powered Tools",
  description: "Discover how the Plus AI Chrome Extension revolutionizes your browsing experience with AI-powered productivity tools, intelligent assistance, and seamless integration.",
  alternates: {
    canonical: "/blog/post/plus-ai-chrome-extension-enhancing-productivity-with-ai-powered-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Plus AI Chrome Extension: Enhancing Productivity with AI-Powered Tools"
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