import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Do AI Comment Generators Enhance User Engagement?",
  description: "Discover the power of AI comment generators in enhancing user engagement, driving meaningful interactions, and fostering vibrant online communities.",
  alternates: {
    canonical: "/blog/post/how-do-ai-comment-generators-enhance-user-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Do AI Comment Generators Enhance User Engagement?"
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