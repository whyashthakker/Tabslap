import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing the Power of AI Text Generator Code: Revolutionizing Content Creation",
  description: "Discover how AI text generator code is transforming the content creation landscape, enabling businesses and individuals to generate high-quality, engaging content at scale.",
  alternates: {
    canonical: "/blog/post/unleashing-the-power-of-ai-text-generator-code",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing the Power of AI Text Generator Code: Revolutionizing Content Creation"
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