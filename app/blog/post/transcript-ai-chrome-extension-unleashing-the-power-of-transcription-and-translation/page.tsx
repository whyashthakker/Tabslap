import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Transcript AI Chrome Extension: Unleashing the Power of Transcription and Translation",
  description: "Explore how the Transcript AI Chrome Extension revolutionizes transcription and translation, enhancing productivity and accessibility for users worldwide.",
  alternates: {
    canonical: "/blog/post/transcript-ai-chrome-extension-unleashing-the-power-of-transcription-and-translation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Transcript AI Chrome Extension: Unleashing the Power of Transcription and Translation"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}