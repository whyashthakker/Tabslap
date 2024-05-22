import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Can AI Comment Generators Benefit E-commerce Businesses?",
  description: "Explore the potential benefits of AI comment generators for e-commerce businesses, including improved customer engagement, personalized recommendations, and enhanced product descriptions.",
  alternates: {
    canonical: "/blog/post/how-can-ai-comment-generators-benefit-e-commerce-businesses",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Can AI Comment Generators Benefit E-commerce Businesses?"
        datePublished="2024-05-21T08:00:00+00:00"
        dateModified="2024-05-21T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}