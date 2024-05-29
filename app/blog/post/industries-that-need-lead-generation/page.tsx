import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Industries That Need Lead Generation: Strategies for Success",
  description: "Discover the industries that heavily rely on lead generation for growth and explore effective strategies to generate high-quality leads in these sectors.",
  alternates: {
    canonical: "/blog/post/industries-that-need-lead-generation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Industries That Need Lead Generation: Strategies for Success"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}