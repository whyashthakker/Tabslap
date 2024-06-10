import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Adobe's AI Text Generator: Revolutionizing Content Creation",
  description: "Explore Adobe's cutting-edge AI text generator and discover how it is transforming the landscape of content creation, making it faster, easier, and more efficient than ever before.",
  alternates: {
    canonical: "/blog/post/adobes-ai-text-generator-revolutionizing-content-creation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Adobe's AI Text Generator: Revolutionizing Content Creation"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}