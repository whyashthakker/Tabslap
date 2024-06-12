import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Bot Chrome Extension: Empowering Your Browser with Artificial Intelligence",
  description: "Discover the AI Bot Chrome Extension and how it can revolutionize your browsing experience with the power of artificial intelligence. Learn about its features, benefits, and how to download and install it.",
  alternates: {
    canonical: "/blog/post/ai-bot-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Bot Chrome Extension: Empowering Your Browser with Artificial Intelligence"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}