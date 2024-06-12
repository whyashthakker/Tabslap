import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Discord Bot: Enhancing Your Server with AI-Powered Conversations",
  description: "Discover how an AI text generator Discord bot can revolutionize your server's engagement and interactivity, providing endless possibilities for creative and dynamic conversations.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-discord-bot",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Discord Bot: Enhancing Your Server with AI-Powered Conversations"
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