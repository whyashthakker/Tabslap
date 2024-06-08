import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Response Generators: Enhancing Customer Engagement and Support",
  description: "Discover how AI text response generators are revolutionizing customer engagement and support. Explore their features, benefits, and best practices for implementation.",
  alternates: {
    canonical: "/blog/post/ai-text-response-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Response Generators: Enhancing Customer Engagement and Support"
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