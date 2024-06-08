import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing the Power of AI Search with Chrome Extensions",
  description: "Discover how Chrome AI search extensions are revolutionizing the way we search and access information online, making our browsing experience more efficient and intelligent.",
  alternates: {
    canonical: "/blog/post/unleashing-the-power-of-ai-search-with-chrome-extensions",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing the Power of AI Search with Chrome Extensions"
        datePublished="2024-06-07T08:00:00+00:00"
        dateModified="2024-06-07T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}