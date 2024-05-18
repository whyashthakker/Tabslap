import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Customizing AI Comment Generators for Different Industries: Tailoring Moderation to Specific Needs",
  description: "Discover how AI comment generators can be customized to meet the unique moderation needs of different industries. Learn about industry-specific challenges and the benefits of tailored AI moderation solutions.",
  alternates: {
    canonical: "/blog/post/customizing-ai-comment-generators-for-different-industries",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Customizing AI Comment Generators for Different Industries: Tailoring Moderation to Specific Needs"
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