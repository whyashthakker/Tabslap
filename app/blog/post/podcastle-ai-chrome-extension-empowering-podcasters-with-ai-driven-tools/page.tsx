import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Podcastle AI Chrome Extension: Empowering Podcasters with AI-Driven Tools",
  description: "Discover how the Podcastle AI Chrome Extension revolutionizes podcast creation and editing with AI-powered tools for audio enhancement, transcription, and more.",
  alternates: {
    canonical: "/blog/post/podcastle-ai-chrome-extension-empowering-podcasters-with-ai-driven-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Podcastle AI Chrome Extension: Empowering Podcasters with AI-Driven Tools"
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