import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "EvyAI Chrome Extension: Your AI-Powered Browsing Companion",
  description: "Discover how the EvyAI Chrome Extension is transforming web browsing with AI-powered features, including intelligent search, personalized recommendations, and enhanced productivity tools.",
  alternates: {
    canonical: "/blog/post/evyai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="EvyAI Chrome Extension: Your AI-Powered Browsing Companion"
        datePublished="2023-06-06T08:00:00+00:00"
        dateModified="2023-06-06T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}