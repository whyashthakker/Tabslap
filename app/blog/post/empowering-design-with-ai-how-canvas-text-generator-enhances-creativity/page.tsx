import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Empowering Design with AI: How Canva's Text Generator Enhances Creativity",
  description: "Discover how Canva's AI text generator is revolutionizing the design process, empowering users to create stunning visuals with ease. Learn how this innovative tool streamlines content creation and boosts creativity.",
  alternates: {
    canonical: "/blog/post/empowering-design-with-ai-how-canvas-text-generator-enhances-creativity",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Empowering Design with AI: How Canva's Text Generator Enhances Creativity"
        datePublished="2024-06-03T08:00:00+00:00"
        dateModified="2024-06-03T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}