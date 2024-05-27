import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use AI to Boost Your Instagram Organic Growth",
  description: "Discover how artificial intelligence tools can help you boost your Instagram organic growth, create engaging content, and build a loyal following on the platform.",
  alternates: {
    canonical: "/blog/post/how-to-use-ai-to-boost-your-instagram-organic-growth",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use AI to Boost Your Instagram Organic Growth"
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