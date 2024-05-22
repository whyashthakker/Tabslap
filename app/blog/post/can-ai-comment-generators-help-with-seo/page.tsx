import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Can AI Comment Generators Help with SEO?",
  description: "Explore how AI comment generators can potentially impact SEO efforts and whether they are a viable strategy for boosting search engine rankings.",
  alternates: {
    canonical: "/blog/post/can-ai-comment-generators-help-with-seo",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Can AI Comment Generators Help with SEO?"
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