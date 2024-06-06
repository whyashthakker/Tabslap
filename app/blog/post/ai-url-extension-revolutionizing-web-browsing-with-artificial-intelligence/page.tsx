import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI URL Extension: Revolutionizing Web Browsing with Artificial Intelligence",
  description: "Discover how AI URL extensions are transforming the way we browse the web by integrating artificial intelligence, providing personalized experiences, and automating tasks.",
  alternates: {
    canonical: "/blog/post/ai-url-extension-revolutionizing-web-browsing-with-artificial-intelligence",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI URL Extension: Revolutionizing Web Browsing with Artificial Intelligence"
        datePublished="2024-06-06T08:00:00+00:00"
        dateModified="2024-06-06T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}