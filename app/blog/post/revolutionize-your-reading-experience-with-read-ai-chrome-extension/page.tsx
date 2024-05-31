import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionize Your Reading Experience with Read.ai Chrome Extension",
  description: "Discover how the Read.ai Chrome Extension transforms your online reading experience, making it more efficient, engaging, and personalized. From text-to-speech to advanced highlighting and note-taking, learn how this powerful tool can help you unlock the full potential of your reading.",
  alternates: {
    canonical: "/blog/post/revolutionize-your-reading-experience-with-read-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionize Your Reading Experience with Read.ai Chrome Extension"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}