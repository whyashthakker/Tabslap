import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Organic Growth on Twitter: Leveraging AI for Better Engagement",
  description: "Learn how to harness the power of artificial intelligence to drive organic growth on Twitter, create engaging content, and build a loyal following on the platform.",
  alternates: {
    canonical: "/blog/post/organic-growth-on-twitter-leveraging-ai-for-better-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Organic Growth on Twitter: Leveraging AI for Better Engagement"
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