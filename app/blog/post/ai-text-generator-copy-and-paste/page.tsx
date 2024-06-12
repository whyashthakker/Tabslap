import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Copy and Paste: Effortless Content Creation",
  description: "Discover the power of AI text generator copy and paste tools that streamline your content creation process, saving time and effort while producing high-quality results.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-copy-and-paste",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Copy and Paste: Effortless Content Creation"
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