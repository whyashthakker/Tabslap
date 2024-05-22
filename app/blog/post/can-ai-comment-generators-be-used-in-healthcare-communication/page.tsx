import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Can AI Comment Generators Be Used in Healthcare Communication?",
  description: "Explore the potential applications, benefits, and challenges of using AI comment generators in healthcare communication, improving patient engagement, and enhancing the quality of care.",
  alternates: {
    canonical: "/blog/post/can-ai-comment-generators-be-used-in-healthcare-communication",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Can AI Comment Generators Be Used in Healthcare Communication?"
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