import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Can AI Comment Generators Enhance Customer Feedback?",
  description: "Discover the potential of AI comment generators in enhancing customer feedback, providing valuable insights, and driving meaningful improvements in products and services.",
  alternates: {
    canonical: "/blog/post/how-can-ai-comment-generators-enhance-customer-feedback",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Can AI Comment Generators Enhance Customer Feedback?"
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