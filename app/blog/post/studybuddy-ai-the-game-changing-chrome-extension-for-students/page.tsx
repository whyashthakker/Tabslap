import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "StudyBuddy AI: The Game-Changing Chrome Extension for Students",
  description: "Discover how StudyBuddy AI, an innovative Chrome extension, is transforming the way students learn, research, and succeed in their academic pursuits.",
  alternates: {
    canonical: "/blog/post/studybuddy-ai-the-game-changing-chrome-extension-for-students",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="StudyBuddy AI: The Game-Changing Chrome Extension for Students"
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