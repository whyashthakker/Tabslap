import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Wizdom.ai Chrome Extension: Empowering Intelligent Web Browsing",
  description: "Discover how the Wizdom.ai Chrome Extension revolutionizes your web browsing experience with AI-powered features and personalized recommendations.",
  alternates: {
    canonical: "/blog/post/wizdom-ai-chrome-extension-empowering-intelligent-web-browsing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Wizdom.ai Chrome Extension: Empowering Intelligent Web Browsing"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}