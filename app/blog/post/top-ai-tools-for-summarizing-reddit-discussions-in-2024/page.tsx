import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Top AI Tools for Summarizing Reddit Discussions in 2024",
  description: "Discover the best AI tools for summarizing Reddit discussions in 2024, saving time and extracting valuable insights from lengthy threads.",
  alternates: {
    canonical: "/blog/post/top-ai-tools-for-summarizing-reddit-discussions-in-2024",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Top AI Tools for Summarizing Reddit Discussions in 2024"
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