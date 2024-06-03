import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exploring the World of AI Text Generators on GitHub: A Developer's Guide",
  description: "Discover the fascinating world of AI text generators available on GitHub. Learn about the top repositories, their features, and how developers can leverage these tools to create innovative applications and enhance their projects.",
  alternates: {
    canonical: "/blog/post/exploring-the-world-of-ai-text-generators-on-github-a-developers-guide",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exploring the World of AI Text Generators on GitHub: A Developer's Guide"
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