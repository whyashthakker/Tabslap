import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exam Room AI: The Game-Changing Chrome Extension for Online Exams",
  description: "Discover how Exam Room AI, an innovative Chrome extension, is revolutionizing the online exam experience, ensuring academic integrity and providing intelligent support for students and educators alike.",
  alternates: {
    canonical: "/blog/post/exam-room-ai-the-game-changing-chrome-extension-for-online-exams",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exam Room AI: The Game-Changing Chrome Extension for Online Exams"
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