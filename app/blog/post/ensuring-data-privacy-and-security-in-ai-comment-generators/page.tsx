import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Ensuring Data Privacy and Security in AI Comment Generators",
  description: "Discover the strategies and best practices employed by AI comment generators to ensure data privacy and security for users and their sensitive information.",
  alternates: {
    canonical: "/blog/post/ensuring-data-privacy-and-security-in-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Ensuring Data Privacy and Security in AI Comment Generators"
        datePublished="2024-05-22T08:00:00+00:00"
        dateModified="2024-05-22T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}