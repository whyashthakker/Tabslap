import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Resume AI Chrome Extension: Revolutionizing Resume Creation and Optimization",
  description: "Discover the Resume AI Chrome Extension, a powerful tool that leverages artificial intelligence to create, optimize, and analyze resumes, helping job seekers stand out in the competitive job market.",
  alternates: {
    canonical: "/blog/post/resume-ai-chrome-extension-revolutionizing-resume-creation-and-optimization",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Resume AI Chrome Extension: Revolutionizing Resume Creation and Optimization"
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