import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing Creativity with Storytell.ai Chrome Extension",
  description: "Discover how Storytell.ai Chrome Extension is empowering writers, sparking creativity, and revolutionizing the storytelling process.",
  alternates: {
    canonical: "/blog/post/unleashing-creativity-with-storytell-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing Creativity with Storytell.ai Chrome Extension"
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