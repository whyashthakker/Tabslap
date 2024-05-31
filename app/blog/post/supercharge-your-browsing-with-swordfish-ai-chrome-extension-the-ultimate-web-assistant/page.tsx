import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Supercharge Your Browsing with Swordfish AI Chrome Extension: The Ultimate Web Assistant",
  description: "Discover how the Swordfish AI Chrome Extension transforms your web browsing experience, making it smarter, more efficient, and personalized. From intelligent search to automated tasks and privacy protection, learn how this cutting-edge tool can revolutionize the way you navigate the internet.",
  alternates: {
    canonical: "/blog/post/supercharge-your-browsing-with-swordfish-ai-chrome-extension-the-ultimate-web-assistant",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Supercharge Your Browsing with Swordfish AI Chrome Extension: The Ultimate Web Assistant"
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