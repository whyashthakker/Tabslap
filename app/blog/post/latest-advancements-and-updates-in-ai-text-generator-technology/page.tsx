import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Latest Advancements and Updates in AI Text Generator Technology",
  description: "Stay informed about the latest advancements, updates, and news in the world of AI text generators. Discover how these technologies are evolving and shaping the future of content creation.",
  alternates: {
    canonical: "/blog/post/latest-advancements-and-updates-in-ai-text-generator-technology",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Latest Advancements and Updates in AI Text Generator Technology"
        datePublished="2024-06-04T08:00:00+00:00"
        dateModified="2024-06-04T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}