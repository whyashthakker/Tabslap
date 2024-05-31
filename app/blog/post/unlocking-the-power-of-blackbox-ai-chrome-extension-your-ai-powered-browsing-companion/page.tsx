import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unlocking the Power of BlackBox AI Chrome Extension: Your AI-Powered Browsing Companion",
  description: "Discover how the BlackBox AI Chrome Extension revolutionizes your browsing experience with intelligent features and personalized recommendations. Learn about its advanced capabilities and how it can enhance your productivity and online activities.",
  alternates: {
    canonical: "/blog/post/unlocking-the-power-of-blackbox-ai-chrome-extension-your-ai-powered-browsing-companion",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unlocking the Power of BlackBox AI Chrome Extension: Your AI-Powered Browsing Companion"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}