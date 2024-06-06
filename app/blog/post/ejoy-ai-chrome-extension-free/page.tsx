import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Ejoy AI Chrome Extension: Unleash the Power of AI for Free",
  description: "Discover the Ejoy AI Chrome Extension, a free tool that brings the power of artificial intelligence to your browser, enhancing your online experience with intelligent features and personalized assistance.",
  alternates: {
    canonical: "/blog/post/ejoy-ai-chrome-extension-free",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Ejoy AI Chrome Extension: Unleash the Power of AI for Free"
        datePublished="2023-06-06T08:00:00+00:00"
        dateModified="2023-06-06T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}