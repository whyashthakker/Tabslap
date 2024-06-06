import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Chat AI Chrome Extension: Conversational AI at Your Fingertips",
  description: "Discover how the Chat AI Chrome Extension is revolutionizing online communication with AI-powered chatbots, providing instant support, personalized recommendations, and enhanced user experiences.",
  alternates: {
    canonical: "/blog/post/chat-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Chat AI Chrome Extension: Conversational AI at Your Fingertips"
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