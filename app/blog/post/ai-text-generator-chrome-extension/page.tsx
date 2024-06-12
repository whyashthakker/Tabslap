import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Chrome Extension: Harness the Power of AI in Your Browser",
  description: "Discover how AI text generator Chrome extensions can revolutionize your writing experience, providing intelligent suggestions and automating tedious tasks right within your browser.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Chrome Extension: Harness the Power of AI in Your Browser"
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