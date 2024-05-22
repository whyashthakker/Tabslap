import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Transforming Customer Interactions with AI-Powered Comment Generation",
  description: "Explore how AI is revolutionizing customer interactions through intelligent comment generation, enhancing engagement, and driving customer satisfaction.",
  alternates: {
    canonical: "/blog/post/transforming-customer-interactions-with-ai-comment-generation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Transforming Customer Interactions with AI-Powered Comment Generation"
        datePublished="2024-05-22T08:00:00+00:00"
        dateModified="2024-05-22T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}