import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Best AI Tools for Summarizing Clubhouse Conversations",
  description: "Discover the top AI tools for summarizing Clubhouse conversations, helping you capture key insights, save time, and stay informed about the discussions that matter to you.",
  alternates: {
    canonical: "/blog/post/best-ai-tools-for-summarizing-clubhouse-conversations",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Best AI Tools for Summarizing Clubhouse Conversations"
        datePublished="2024-05-25T08:00:00+00:00"
        dateModified="2024-05-25T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}