import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Background Generator: Create Stunning Visuals for Your Content",
  description: "Discover how AI text background generators can revolutionize your content creation process, saving time and effort while creating visually appealing backgrounds.",
  alternates: {
    canonical: "/blog/post/ai-text-background-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Background Generator: Create Stunning Visuals for Your Content"
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