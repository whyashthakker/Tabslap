import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing the Power of Writing with Paragraph AI Chrome Extension",
  description: "Discover how Paragraph AI Chrome Extension is empowering writers, enhancing creativity, and streamlining the writing process.",
  alternates: {
    canonical: "/blog/post/unleashing-the-power-of-writing-with-paragraph-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing the Power of Writing with Paragraph AI Chrome Extension"
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