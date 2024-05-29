import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Enhancing Web Browsing with Seamless AI Chrome Extension: Productivity and Efficiency at Your Fingertips",
  description: "Discover how Seamless AI Chrome Extension revolutionizes web browsing, offering advanced features and AI-powered tools to boost productivity and efficiency.",
  alternates: {
    canonical: "/blog/post/enhancing-web-browsing-with-seamless-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Enhancing Web Browsing with Seamless AI Chrome Extension: Productivity and Efficiency at Your Fingertips"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}