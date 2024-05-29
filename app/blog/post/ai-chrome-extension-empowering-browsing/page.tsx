import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Chrome Extension: Empowering Browsing with Artificial Intelligence",
  description: "Discover how AI Chrome extensions are revolutionizing web browsing, enhancing productivity, and providing intelligent features to improve the user experience.",
  alternates: {
    canonical: "/blog/post/ai-chrome-extension-empowering-browsing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Chrome Extension: Empowering Browsing with Artificial Intelligence"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}