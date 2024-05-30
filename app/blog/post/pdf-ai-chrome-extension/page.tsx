import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "PDF.ai: The Ultimate Chrome Extension for PDF Management",
  description: "Discover PDF.ai, the powerful Chrome extension that revolutionizes the way you handle PDFs. With advanced AI capabilities, PDF.ai makes working with PDFs a breeze.",
  alternates: {
    canonical: "/blog/post/pdf-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="PDF.ai: The Ultimate Chrome Extension for PDF Management"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}