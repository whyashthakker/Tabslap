import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generators vs. Human Moderators: A Comparative Analysis",
  description: "Explore the differences between AI comment generators and human moderators in managing online discussions. Discover the pros and cons of each approach and their impact on user engagement.",
  alternates: {
    canonical: "/blog/post/ai-comment-generators-vs-human-moderators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generators vs. Human Moderators: A Comparative Analysis"
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