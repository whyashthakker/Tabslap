import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exploring AI Text Generators Without Restrictions: Possibilities and Pitfalls",
  description: "Discover the world of unrestricted AI text generators and explore their potential applications, challenges, and ethical considerations in content creation.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-without-restrictions",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exploring AI Text Generators Without Restrictions: Possibilities and Pitfalls"
        datePublished="2023-06-04T08:00:00+00:00"
        dateModified="2023-06-04T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}