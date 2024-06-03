import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Enhancing Reading Comprehension with Read.ai Chrome Extension",
  description: "Discover how Read.ai Chrome Extension is transforming the way we read online, providing intelligent insights, and improving reading comprehension.",
  alternates: {
    canonical: "/blog/post/enhancing-reading-comprehension-with-read-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Enhancing Reading Comprehension with Read.ai Chrome Extension"
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