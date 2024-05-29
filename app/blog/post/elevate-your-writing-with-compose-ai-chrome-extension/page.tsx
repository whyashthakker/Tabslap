import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Elevate Your Writing with Compose AI Chrome Extension: Seamless Integration for Enhanced Productivity",
  description: "Discover how Compose AI Chrome Extension revolutionizes your writing experience, offering advanced features and seamless integration for unparalleled productivity.",
  alternates: {
    canonical: "/blog/post/elevate-your-writing-with-compose-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Elevate Your Writing with Compose AI Chrome Extension: Seamless Integration for Enhanced Productivity"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}