import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleash Your Creativity with the Best Comment Generator for YouTube!",
  description: "Generate AI comments for YouTube videos with the best comment generator. Get creative and engage your audience with unique comments.",
  alternates: {
    canonical: "/blog/post/best-comment-generator-for-youtube",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleash Your Creativity with the Best Comment Generator for YouTube"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}