import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Playground: Unleash Your Creativity with AI-Powered Writing",
  description: "Explore the exciting world of AI text generator playgrounds and discover how these interactive platforms can help you unleash your creativity and improve your writing skills.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-playground",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Playground: Unleash Your Creativity with AI-Powered Writing"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}