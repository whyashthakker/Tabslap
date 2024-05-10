import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Building a Personal Brand Through Social Media: Strategies for Authentic Self-Promotion",
  description: "Learn how to build a strong personal brand through social media. Discover strategies for authentic self-promotion, creating engaging content, and establishing yourself as a thought leader in your industry.",
  alternates: {
    canonical: "/blog/post/building-a-personal-brand-through-social-media",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Building a Personal Brand Through Social Media: Strategies for Authentic Self-Promotion"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}