import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Art of Creating Shareable Infographics: Engaging Visuals for Your Content Strategy",
  description: "Discover the art of creating shareable infographics that captivate your audience and boost your content strategy. Learn the best practices and tools for designing engaging visual content.",
  alternates: {
    canonical: "/blog/post/the-art-of-creating-shareable-infographics",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Art of Creating Shareable Infographics: Engaging Visuals for Your Content Strategy"
        datePublished="2024-05-11T08:00:00+00:00"
        dateModified="2024-05-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}