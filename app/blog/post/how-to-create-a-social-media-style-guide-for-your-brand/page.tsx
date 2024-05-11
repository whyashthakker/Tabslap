import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Create a Social Media Style Guide for Your Brand: Ensuring Consistency and Cohesion",
  description: "Learn how to create a comprehensive social media style guide for your brand to ensure consistency, cohesion, and effective communication across all platforms. Discover the key elements to include and best practices for implementation.",
  alternates: {
    canonical: "/blog/post/how-to-create-a-social-media-style-guide-for-your-brand",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Create a Social Media Style Guide for Your Brand: Ensuring Consistency and Cohesion"
        datePublished="2024-05-11T08:00:00+00:00"
        dateModified="2024-05-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}