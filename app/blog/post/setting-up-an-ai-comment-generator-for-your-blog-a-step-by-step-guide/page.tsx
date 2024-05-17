import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Setting Up an AI Comment Generator for Your Blog: A Step-by-Step Guide",
  description: "Learn how to set up an AI comment generator for your blog to enhance engagement and streamline comment management. Follow our step-by-step guide to integrate AI-powered comment generation seamlessly into your blogging platform.",
  alternates: {
    canonical: "/blog/post/setting-up-an-ai-comment-generator-for-your-blog-a-step-by-step-guide",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Setting Up an AI Comment Generator for Your Blog: A Step-by-Step Guide"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}