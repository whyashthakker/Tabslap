import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing the Power of AI Text Generators for Instagram: Boost Engagement and Reach",
  description: "Discover how AI text generators can revolutionize your Instagram strategy, boost engagement, and expand your reach. Learn how to create compelling captions and content with AI-powered tools.",
  alternates: {
    canonical: "/blog/post/unleashing-the-power-of-ai-text-generators-for-instagram",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing the Power of AI Text Generators for Instagram: Boost Engagement and Reach"
        datePublished="2024-06-03T08:00:00+00:00"
        dateModified="2024-06-03T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}