import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "StudyPal AI: The Ultimate Chrome Extension for Students",
  description: "Discover how StudyPal AI, a powerful Chrome extension, is revolutionizing the way students learn, research, and excel in their academic pursuits.",
  alternates: {
    canonical: "/blog/post/studypal-ai-the-ultimate-chrome-extension-for-students",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="StudyPal AI: The Ultimate Chrome Extension for Students"
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