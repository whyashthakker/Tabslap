import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Merlin AI Chrome Extension: Enhancing Your Browsing Experience with AI",
  description: "Discover the Merlin AI Chrome Extension and how it can revolutionize your browsing experience. Learn about its features, benefits, and how to download and install it.",
  alternates: {
    canonical: "/blog/post/merlin-ai-chrome-extension-download",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Merlin AI Chrome Extension: Enhancing Your Browsing Experience with AI"
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