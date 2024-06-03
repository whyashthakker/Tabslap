import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Essay Writing with AI Text Generators",
  description: "Discover how AI text generators are transforming the essay writing process, providing students and writers with powerful tools to enhance their writing skills and productivity.",
  alternates: {
    canonical: "/blog/post/revolutionizing-essay-writing-with-ai-text-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Essay Writing with AI Text Generators"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}