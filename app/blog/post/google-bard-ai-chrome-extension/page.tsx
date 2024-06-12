import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Google Bard AI Chrome Extension: Unleashing the Power of Google's AI in Your Browser",
  description: "Discover the Google Bard AI Chrome Extension and how it can transform your browsing experience with the power of Google's advanced artificial intelligence. Learn about its features, benefits, and how to download and install it.",
  alternates: {
    canonical: "/blog/post/google-bard-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Google Bard AI Chrome Extension: Unleashing the Power of Google's AI in Your Browser"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}