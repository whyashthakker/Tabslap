import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generators: Empowering Large Enterprises in Social Media Engagement",
  description: "Discover how AI comment generators support large enterprises in managing and optimizing their social media engagement efforts. Learn about the key benefits and best practices for implementation.",
  alternates: {
    canonical: "/blog/post/ai-comment-generators-empowering-large-enterprises-in-social-media-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generators: Empowering Large Enterprises in Social Media Engagement"
        datePublished="2024-05-23T08:00:00+00:00"
        dateModified="2024-05-23T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}