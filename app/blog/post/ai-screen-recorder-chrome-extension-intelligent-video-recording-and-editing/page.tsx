import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Screen Recorder Chrome Extension: Intelligent Video Recording and Editing",
  description: "Discover the AI Screen Recorder Chrome Extension, a powerful tool that combines screen recording with AI-powered features for intelligent video editing, transcription, and analysis.",
  alternates: {
    canonical: "/blog/post/ai-screen-recorder-chrome-extension-intelligent-video-recording-and-editing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Screen Recorder Chrome Extension: Intelligent Video Recording and Editing"
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