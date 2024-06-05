import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Designing the Perfect AI Text Generator Logo: Tips and Best Practices",
  description: "Learn how to create a captivating and memorable logo for your AI text generator. Discover design tips, best practices, and examples to inspire your logo creation process.",
  alternates: {
    canonical: "/blog/post/designing-the-perfect-ai-text-generator-logo",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Designing the Perfect AI Text Generator Logo: Tips and Best Practices"
        datePublished="2024-06-04T08:00:00+00:00"
        dateModified="2024-06-04T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}