import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Choosing the Best AI Comment Generator for YouTube: A Comprehensive Guide",
  description: "Discover the key factors to consider when choosing the best AI comment generator for YouTube. Learn about the top AI comment generator tools and their features to enhance your YouTube engagement strategy.",
  alternates: {
    canonical: "/blog/post/choosing-the-best-ai-comment-generator-for-youtube-a-comprehensive-guide",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Choosing the Best AI Comment Generator for YouTube: A Comprehensive Guide"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}