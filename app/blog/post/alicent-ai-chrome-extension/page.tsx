import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Alicent AI Chrome Extension: Enhancing Your Browsing with Artificial Intelligence",
  description: "Discover the Alicent AI Chrome Extension and how it can revolutionize your browsing experience with AI-powered features. Learn about its benefits and how to install it on your Chrome browser.",
  alternates: {
    canonical: "/blog/post/alicent-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Alicent AI Chrome Extension: Enhancing Your Browsing with Artificial Intelligence"
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