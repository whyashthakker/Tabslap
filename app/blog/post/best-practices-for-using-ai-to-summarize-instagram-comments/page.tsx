import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Best Practices for Using AI to Summarize Instagram Comments",
  description: "Discover the best practices for leveraging AI to summarize Instagram comments effectively, saving time and extracting valuable insights from user feedback.",
  alternates: {
    canonical: "/blog/post/best-practices-for-using-ai-to-summarize-instagram-comments",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Best Practices for Using AI to Summarize Instagram Comments"
        datePublished="2024-05-25T08:00:00+00:00"
        dateModified="2024-05-25T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}