import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Character: Bringing Fictional Personas to Life",
  description: "Explore the fascinating world of AI text generator characters and discover how they can bring fictional personas to life, creating immersive and interactive experiences.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-character",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Character: Bringing Fictional Personas to Life"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}