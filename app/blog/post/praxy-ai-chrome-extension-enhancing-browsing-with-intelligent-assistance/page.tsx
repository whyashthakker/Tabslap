import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Praxy AI Chrome Extension: Enhancing Browsing with Intelligent Assistance",
  description: "Discover how the Praxy AI Chrome Extension transforms your browsing experience with AI-powered features, personalized recommendations, and intelligent assistance.",
  alternates: {
    canonical: "/blog/post/praxy-ai-chrome-extension-enhancing-browsing-with-intelligent-assistance",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Praxy AI Chrome Extension: Enhancing Browsing with Intelligent Assistance"
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