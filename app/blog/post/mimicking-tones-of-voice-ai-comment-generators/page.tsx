import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Mimicking Tones of Voice: The Versatility of AI Comment Generators",
  description: "Explore the capabilities of AI comment generators in mimicking different tones of voice. Discover how AI can adapt to various communication styles and enhance the effectiveness of your social media engagement.",
  alternates: {
    canonical: "/blog/post/mimicking-tones-of-voice-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Mimicking Tones of Voice: The Versatility of AI Comment Generators"
        datePublished="2023-05-16T08:00:00+00:00"
        dateModified="2023-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}