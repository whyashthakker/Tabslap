import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Using AI to Improve Your Organic Reach on LinkedIn",
  description: "Discover how artificial intelligence tools can help you boost your organic reach on LinkedIn, create compelling content, and engage with your target audience effectively.",
  alternates: {
    canonical: "/blog/post/using-ai-to-improve-your-organic-reach-on-linkedin",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Using AI to Improve Your Organic Reach on LinkedIn"
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