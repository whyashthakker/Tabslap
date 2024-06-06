import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use AI Chrome Extensions: Unleashing the Power of Artificial Intelligence in Web Browsing",
  description: "Learn how to effectively use AI Chrome extensions to enhance your web browsing experience, boost productivity, and unlock the power of artificial intelligence in your online activities.",
  alternates: {
    canonical: "/blog/post/how-to-use-ai-chrome-extensions-unleashing-the-power-of-artificial-intelligence-in-web-browsing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use AI Chrome Extensions: Unleashing the Power of Artificial Intelligence in Web Browsing"
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