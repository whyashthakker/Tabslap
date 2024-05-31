import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unlock the Power of Question AI Chrome Extension: Your Personal Research Assistant",
  description: "Discover how the Question AI Chrome Extension revolutionizes your online research, making it faster, smarter, and more efficient. From generating relevant questions to finding accurate answers, learn how this powerful tool can help you unlock valuable insights with ease.",
  alternates: {
    canonical: "/blog/post/unlock-the-power-of-question-ai-chrome-extension-your-personal-research-assistant",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unlock the Power of Question AI Chrome Extension: Your Personal Research Assistant"
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