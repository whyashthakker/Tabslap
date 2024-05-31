import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing the Power of Bearly AI Chrome Extension for Effortless Writing",
  description: "Discover how the Bearly AI Chrome Extension revolutionizes your writing experience, making it effortless and efficient. From generating content to optimizing your writing, learn how this powerful tool can help you create high-quality content with ease.",
  alternates: {
    canonical: "/blog/post/unleashing-the-power-of-bearly-ai-chrome-extension-for-effortless-writing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing the Power of Bearly AI Chrome Extension for Effortless Writing"
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