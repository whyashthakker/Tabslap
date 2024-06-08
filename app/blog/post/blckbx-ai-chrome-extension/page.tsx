import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Blckbx.ai Chrome Extension: Empowering Privacy and Security in Your Browser",
  description: "Discover how the Blckbx.ai Chrome Extension is revolutionizing online privacy and security with AI-powered features, ensuring your data remains protected while browsing the web.",
  alternates: {
    canonical: "/blog/post/blckbx-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Blckbx ai Chrome Extension: Empowering Privacy and Security in Your Browser"
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