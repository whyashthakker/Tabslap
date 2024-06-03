import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Blackbox AI Chrome Extension: Enhancing Privacy and Security",
  description: "Discover how the Blackbox AI Chrome Extension revolutionizes online privacy and security, providing advanced features and intelligent protection for your browsing experience.",
  alternates: {
    canonical: "/blog/post/blackbox-ai-chrome-extension-enhancing-privacy-and-security",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Blackbox AI Chrome Extension: Enhancing Privacy and Security"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}