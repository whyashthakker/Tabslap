import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator for Resume: Crafting the Perfect Resume Made Easy",
  description: "Discover how AI text generators are revolutionizing the resume creation process, helping job seekers create compelling and professional resumes effortlessly.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-for-resume-crafting-the-perfect-resume-made-easy",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator for Resume: Crafting the Perfect Resume Made Easy"
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