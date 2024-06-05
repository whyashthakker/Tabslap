import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exploring Open Source AI Text Generators: Empowering Developers and Researchers",
  description: "Discover the world of open-source AI text generators and how they are empowering developers and researchers to innovate and build cutting-edge language models.",
  alternates: {
    canonical: "/blog/post/exploring-open-source-ai-text-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exploring Open Source AI Text Generators: Empowering Developers and Researchers"
        datePublished="2024-06-04T08:00:00+00:00"
        dateModified="2024-06-04T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}