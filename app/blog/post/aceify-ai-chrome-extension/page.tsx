import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Aceify.AI Chrome Extension: Elevate Your Browsing with AI-Powered Tools",
  description: "Discover the Aceify.AI Chrome Extension and how it can transform your browsing experience with AI-powered tools. Learn about its features, benefits, and how to download and install it.",
  alternates: {
    canonical: "/blog/post/aceify-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Aceify.AI Chrome Extension: Elevate Your Browsing with AI-Powered Tools"
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