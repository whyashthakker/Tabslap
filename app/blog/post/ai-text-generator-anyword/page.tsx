import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Anyword: The Ultimate AI Text Generator for Marketers and Writers",
  description: "Discover Anyword, the powerful AI text generator that revolutionizes content creation for marketers and writers. Generate compelling copy in seconds and boost your content performance.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-anyword",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Anyword: The Ultimate AI Text Generator for Marketers and Writers"
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