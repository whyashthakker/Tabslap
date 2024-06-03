import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unlocking the Power of Jasper.ai: The Ultimate AI Text Generator",
  description: "Discover the incredible capabilities of Jasper.ai, the leading AI text generator. Learn how Jasper.ai can revolutionize your content creation process, boost productivity, and achieve remarkable results.",
  alternates: {
    canonical: "/blog/post/unlocking-the-power-of-jasper-ai-the-ultimate-ai-text-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unlocking the Power of Jasper.ai: The Ultimate AI Text Generator"
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