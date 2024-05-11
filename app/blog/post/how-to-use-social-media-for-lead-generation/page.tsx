import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Lead Generation: Proven Strategies and Tactics",
  description: "Discover proven strategies and tactics for using social media to generate high-quality leads for your business. Learn how to attract, engage, and convert potential customers on social platforms.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-lead-generation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Lead Generation: Proven Strategies and Tactics"
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