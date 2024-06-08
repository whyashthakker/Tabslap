import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Elevate Your Writing with Quillbot AI Chrome Extension",
  description: "Discover how the Quillbot AI Chrome Extension can help you improve your writing, enhance clarity, and boost productivity.",
  alternates: {
    canonical: "/blog/post/elevate-your-writing-with-quillbot-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Elevate Your Writing with Quillbot AI Chrome Extension"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}