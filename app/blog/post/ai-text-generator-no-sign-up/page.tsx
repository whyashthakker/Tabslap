import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator: Create High-Quality Content Without Sign-Up",
  description: "Discover the best AI text generators that allow you to create high-quality content without the need for sign-up. Streamline your writing process and boost productivity.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-no-sign-up",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator: Create High-Quality Content Without Sign-Up"
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