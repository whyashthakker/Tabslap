import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Voice: Transforming Text-to-Speech with Artificial Intelligence",
  description: "Discover how AI text generator voice technology is revolutionizing text-to-speech, enabling more natural and expressive voice synthesis for various applications.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-voice-transforming-text-to-speech-with-artificial-intelligence",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Voice: Transforming Text-to-Speech with Artificial Intelligence"
        datePublished="2024-06-05T08:00:00+00:00"
        dateModified="2024-06-05T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}