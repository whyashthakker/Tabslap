import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Free AI Comment Generators: Enhancing Social Media Engagement on a Budget",
  description: "Discover the availability of free AI comment generators and how they can help you enhance your social media engagement without breaking the bank. Explore the features, benefits, and considerations of using free AI-powered commenting tools.",
  alternates: {
    canonical: "/blog/post/free-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Free AI Comment Generators: Enhancing Social Media Engagement on a Budget"
        datePublished="2023-05-16T08:00:00+00:00"
        dateModified="2023-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}