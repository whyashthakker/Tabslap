import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Content Creation: The Power of AI Text Content Generators",
  description: "Discover how AI text content generators are transforming the content creation landscape, enabling businesses and individuals to produce high-quality, engaging content at scale. Learn about the benefits, applications, and best practices for leveraging these innovative tools.",
  alternates: {
    canonical: "/blog/post/revolutionizing-content-creation-the-power-of-ai-text-content-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Content Creation: The Power of AI Text Content Generators"
        datePublished="2024-06-03T08:00:00+00:00"
        dateModified="2024-06-03T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}