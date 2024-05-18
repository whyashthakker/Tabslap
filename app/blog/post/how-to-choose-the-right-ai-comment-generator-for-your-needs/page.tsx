import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Choose the Right AI Comment Generator for Your Needs",
  description: "Discover the key factors to consider when selecting an AI comment generator for your social media strategy. From features and customization to pricing and support, learn how to find the perfect AI comment generator for your needs.",
  alternates: {
    canonical: "/blog/post/how-to-choose-the-right-ai-comment-generator-for-your-needs",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Choose the Right AI Comment Generator for Your Needs"
        datePublished="2024-05-18T08:00:00+00:00"
        dateModified="2024-05-18T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}