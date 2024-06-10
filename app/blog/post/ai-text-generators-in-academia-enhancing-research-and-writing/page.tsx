import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generators in Academia: Enhancing Research and Writing",
  description: "Explore the potential of AI text generators in academia and how they can revolutionize research, writing, and knowledge creation for students and scholars.",
  alternates: {
    canonical: "/blog/post/ai-text-generators-in-academia-enhancing-research-and-writing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generators in Academia: Enhancing Research and Writing"
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