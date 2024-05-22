import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Machine Learning in AI Comment Generation",
  description: "Explore how machine learning techniques are employed in AI comment generation to create personalized, contextual, and engaging responses.",
  alternates: {
    canonical: "/blog/post/the-role-of-machine-learning-in-ai-comment-generation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Machine Learning in AI Comment Generation"
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