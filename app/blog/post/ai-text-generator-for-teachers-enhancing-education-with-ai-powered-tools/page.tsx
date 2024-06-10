import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator for Teachers: Enhancing Education with AI-Powered Tools",
  description: "Explore how AI text generators are empowering teachers to create engaging educational content, personalize learning experiences, and save time in the classroom.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-for-teachers-enhancing-education-with-ai-powered-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator for Teachers: Enhancing Education with AI-Powered Tools"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}