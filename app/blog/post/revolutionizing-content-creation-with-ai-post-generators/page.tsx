import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Content Creation with AI Post Generators: Efficiency and Quality Combined",
  description: "Discover how AI post generators are transforming the content creation landscape, offering unparalleled efficiency and quality for businesses and content creators.",
  alternates: {
    canonical: "/blog/post/revolutionizing-content-creation-with-ai-post-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Content Creation with AI Post Generators: Efficiency and Quality Combined"
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