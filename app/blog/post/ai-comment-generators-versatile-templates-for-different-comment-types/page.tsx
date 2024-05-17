import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generators: Versatile Templates for Different Comment Types",
  description: "Discover how AI comment generators offer versatile templates for different types of comments, enabling businesses to efficiently handle diverse customer interactions on social media platforms.",
  alternates: {
    canonical: "/blog/post/ai-comment-generators-versatile-templates-for-different-comment-types",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generators: Versatile Templates for Different Comment Types"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}