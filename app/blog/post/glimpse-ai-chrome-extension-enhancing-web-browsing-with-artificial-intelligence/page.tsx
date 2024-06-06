import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Glimpse AI Chrome Extension: Enhancing Web Browsing with Artificial Intelligence",
  description: "Discover how the Glimpse AI Chrome Extension is revolutionizing web browsing by leveraging artificial intelligence to provide personalized recommendations, automate tasks, and enhance user experience.",
  alternates: {
    canonical: "/blog/post/glimpse-ai-chrome-extension-enhancing-web-browsing-with-artificial-intelligence",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Glimpse AI Chrome Extension: Enhancing Web Browsing with Artificial Intelligence"
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