import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Brisk AI Chrome Extension: Supercharge Your Browsing with Artificial Intelligence",
  description: "Discover the Brisk AI Chrome Extension and how it can revolutionize your browsing experience with the power of AI. Learn about its features, benefits, and how to download and install it.",
  alternates: {
    canonical: "/blog/post/brisk-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Brisk AI Chrome Extension: Supercharge Your Browsing with Artificial Intelligence"
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