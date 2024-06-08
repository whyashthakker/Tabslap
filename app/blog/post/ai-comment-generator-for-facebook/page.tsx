import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generator for Facebook: Boost Engagement and Save Time",
  description: "Discover how an AI comment generator for Facebook can help businesses and individuals boost engagement, save time, and maintain a consistent presence on the platform.",
  alternates: {
    canonical: "/blog/post/ai-comment-generator-for-facebook",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generator for Facebook: Boost Engagement and Save Time"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}