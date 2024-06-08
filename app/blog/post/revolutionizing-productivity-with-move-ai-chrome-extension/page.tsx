import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Productivity with Move AI Chrome Extension",
  description: "Discover how the Move AI Chrome Extension can boost your productivity, automate tasks, and enhance your browsing experience.",
  alternates: {
    canonical: "/blog/post/revolutionizing-productivity-with-move-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Productivity with Move AI Chrome Extension"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}