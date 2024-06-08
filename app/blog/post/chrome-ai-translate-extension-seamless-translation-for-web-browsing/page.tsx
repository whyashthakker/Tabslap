import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Chrome AI Translate Extension: Seamless Translation for Web Browsing",
  description: "Discover how the Chrome AI Translate Extension revolutionizes web browsing by providing seamless and accurate translations, enhancing user experience and accessibility.",
  alternates: {
    canonical: "/blog/post/chrome-ai-translate-extension-seamless-translation-for-web-browsing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Chrome AI Translate Extension: Seamless Translation for Web Browsing"
        datePublished="2024-06-07T08:00:00+00:00"
        dateModified="2024-06-07T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}