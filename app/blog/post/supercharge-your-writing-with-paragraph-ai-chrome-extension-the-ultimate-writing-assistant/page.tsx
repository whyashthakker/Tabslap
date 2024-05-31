import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Supercharge Your Writing with Paragraph AI Chrome Extension: The Ultimate Writing Assistant",
  description: "Discover how the Paragraph AI Chrome Extension revolutionizes your writing process, making it faster, smarter, and more efficient. From generating ideas to refining your content, learn how this powerful tool can help you create compelling paragraphs with ease.",
  alternates: {
    canonical: "/blog/post/supercharge-your-writing-with-paragraph-ai-chrome-extension-the-ultimate-writing-assistant",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Supercharge Your Writing with Paragraph AI Chrome Extension: The Ultimate Writing Assistant"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}