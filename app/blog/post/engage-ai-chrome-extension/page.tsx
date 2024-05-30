import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Engage AI: The Ultimate Chrome Extension for Enhancing User Engagement",
  description: "Discover Engage AI, the powerful Chrome extension that revolutionizes user engagement. Learn how Engage AI can help you create personalized experiences, increase conversions, and boost customer satisfaction.",
  alternates: {
    canonical: "/blog/post/engage-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Engage AI: The Ultimate Chrome Extension for Enhancing User Engagement"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}