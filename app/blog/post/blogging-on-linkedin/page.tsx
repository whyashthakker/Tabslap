import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Blogging on LinkedIn: How to Establish Your Thought Leadership and Grow Your Brand",
  description: "Discover the power of blogging on LinkedIn and learn strategies to create engaging content, establish your thought leadership, and grow your professional brand.",
  alternates: {
    canonical: "/blog/post/blogging-on-linkedin",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Blogging on LinkedIn: How to Establish Your Thought Leadership and Grow Your Brand"
        datePublished="2024-05-28T08:00:00+00:00"
        dateModified="2024-05-28T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}