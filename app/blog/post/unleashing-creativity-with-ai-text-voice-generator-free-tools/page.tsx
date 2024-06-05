import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing Creativity with AI Text Voice Generator Free Tools",
  description: "Explore the world of AI text voice generator free tools and how they are empowering individuals to create engaging voice-based content easily and affordably.",
  alternates: {
    canonical: "/blog/post/unleashing-creativity-with-ai-text-voice-generator-free-tools",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing Creativity with AI Text Voice Generator Free Tools"
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