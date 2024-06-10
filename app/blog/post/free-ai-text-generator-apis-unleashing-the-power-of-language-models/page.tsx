import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Free AI Text Generator APIs: Unleashing the Power of Language Models",
  description: "Discover the best free AI text generator APIs that harness the power of advanced language models, enabling developers to create innovative applications and enhance user experiences.",
  alternates: {
    canonical: "/blog/post/free-ai-text-generator-apis-unleashing-the-power-of-language-models",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Free AI Text Generator APIs: Unleashing the Power of Language Models"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}