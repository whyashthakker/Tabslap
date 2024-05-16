import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Does an AI Comment Generator Work? Unveiling the Technology",
  description: "Explore the inner workings of an AI comment generator and discover the technology behind automated comment generation on social media platforms.",
  alternates: {
    canonical: "/blog/post/how-does-an-ai-comment-generator-work",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Does an AI Comment Generator Work? Unveiling the Technology"
        datePublished="2023-05-16T08:00:00+00:00"
        dateModified="2023-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}