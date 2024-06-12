import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Browsers: Empowering Users with On-Demand Content Creation",
  description: "Explore the world of AI text generator browsers and how they are revolutionizing content creation for users across various industries and applications.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-browser",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Browsers: Empowering Users with On-Demand Content Creation"
        datePublished="2024-06-11T00:00:00+00:00"
        dateModified="2024-06-11T00:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}