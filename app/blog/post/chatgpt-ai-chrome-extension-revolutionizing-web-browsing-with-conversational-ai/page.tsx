import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "ChatGPT AI Chrome Extension: Revolutionizing Web Browsing with Conversational AI",
  description: "Discover how the ChatGPT AI Chrome Extension is transforming web browsing by integrating conversational AI, providing intelligent assistance, automating tasks, and enhancing user experience.",
  alternates: {
    canonical: "/blog/post/chatgpt-ai-chrome-extension-revolutionizing-web-browsing-with-conversational-ai",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="ChatGPT AI Chrome Extension: Revolutionizing Web Browsing with Conversational AI"
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