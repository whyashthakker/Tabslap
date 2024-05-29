import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing Limitless Creativity with Free Unlimited AI Text Generators",
  description: "Discover the power of free unlimited AI text generators and how they revolutionize content creation, providing endless possibilities for writers, marketers, and creators.",
  alternates: {
    canonical: "/blog/post/unleashing-limitless-creativity-with-free-unlimited-ai-text-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing Limitless Creativity with Free Unlimited AI Text Generators"
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