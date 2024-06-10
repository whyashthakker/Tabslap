import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Top Free AI Text Generator Apps: Unleashing Creative Writing",
  description: "Discover the best free AI text generator apps that can help you unleash your creativity, overcome writer's block, and enhance your writing productivity.",
  alternates: {
    canonical: "/blog/post/top-free-ai-text-generator-apps-unleashing-creative-writing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Top Free AI Text Generator Apps: Unleashing Creative Writing"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}