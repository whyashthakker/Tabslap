import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of AI Comment Generators on Social Media Management",
  description: "Explore how AI comment generators are transforming social media management, streamlining engagement, and enhancing brand-customer interactions.",
  alternates: {
    canonical: "/blog/post/impact-of-ai-comment-generators-on-social-media-management",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of AI Comment Generators on Social Media Management"
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