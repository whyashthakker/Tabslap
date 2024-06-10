import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Crafting Compelling Articles with AI Text Generators",
  description: "Discover how AI text generators are revolutionizing article writing, enabling content creators to produce high-quality, engaging articles efficiently and effectively.",
  alternates: {
    canonical: "/blog/post/crafting-compelling-articles-with-ai-text-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Crafting Compelling Articles with AI Text Generators"
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