import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generators: Create Content Instantly, No Sign-Up Required",
  description: "Discover the best AI text generators that allow you to create content instantly without the need for sign-up. Explore their features, benefits, and how they can enhance your writing.",
  alternates: {
    canonical: "/blog/post/ai-text-generators-no-sign-up",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generators: Create Content Instantly, No Sign-Up Required"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}