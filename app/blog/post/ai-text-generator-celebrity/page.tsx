import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Celebrity: Exploring the Intersection of AI and Fame",
  description: "Discover how AI text generator celebrities are reshaping the entertainment industry and blurring the lines between artificial intelligence and stardom.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-celebrity",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Celebrity: Exploring the Intersection of AI and Fame"
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