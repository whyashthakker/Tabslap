import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Academic Writing with AI Text Generator with Citations",
  description: "Discover how AI text generators with citation capabilities are transforming the academic writing process, making it more efficient and accurate.",
  alternates: {
    canonical: "/blog/post/revolutionizing-academic-writing-with-ai-text-generator-with-citations",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Academic Writing with AI Text Generator with Citations"
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