import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comedy Generator: Laughing with Machine Learning",
  description: "Discover the world of AI comedy generators and how they are revolutionizing the world of humor. Learn about the technology behind these tools and explore some of the best AI comedy generators available.",
  alternates: {
    canonical: "/blog/post/ai-comedy-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comedy Generator: Laughing with Machine Learning"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}