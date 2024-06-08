import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Synthesia AI Chrome Extension: Create AI Videos Directly in Your Browser",
  description: "Discover how the Synthesia AI Chrome Extension empowers users to create professional AI-generated videos directly within their browser, revolutionizing video creation for marketers, educators, and content creators.",
  alternates: {
    canonical: "/blog/post/synthesia-ai-chrome-extension-create-ai-videos-directly-in-your-browser",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Synthesia AI Chrome Extension: Create AI Videos Directly in Your Browser"
        datePublished="2024-06-07T08:00:00+00:00"
        dateModified="2024-06-07T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}