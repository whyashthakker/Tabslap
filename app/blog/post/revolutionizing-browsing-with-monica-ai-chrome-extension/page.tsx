import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Browsing with Monica AI Chrome Extension",
  description: "Discover how Monica AI Chrome Extension is transforming the way we browse the web, providing personalized recommendations, and enhancing productivity.",
  alternates: {
    canonical: "/blog/post/revolutionizing-browsing-with-monica-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Browsing with Monica AI Chrome Extension"
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