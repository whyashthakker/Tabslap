import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Pricing Options for Popular AI Comment Generators",
  description: "Explore the pricing options for popular AI comment generators. Compare plans, features, and costs to find the best solution for your needs and budget.",
  alternates: {
    canonical: "/blog/post/pricing-options-for-popular-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Pricing Options for Popular AI Comment Generators"
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