import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "QuillBot AI: The Ultimate Text Generator for Effortless Writing",
  description: "Discover QuillBot AI, the powerful text generation tool that revolutionizes your writing process. Learn how QuillBot can help you create compelling content effortlessly.",
  alternates: {
    canonical: "/blog/post/quillbot-ai-text-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="QuillBot AI: The Ultimate Text Generator for Effortless Writing"
        datePublished="2023-06-04T08:00:00+00:00"
        dateModified="2023-06-04T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}