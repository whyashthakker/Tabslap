import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unlocking Engaging Discussions with HyperWrite's Discussion Post Commenter",
  description: "Discover how HyperWrite's Discussion Post Commenter streamlines the process of creating engaging discussion posts. Learn about its key features, benefits, and how it can help you foster meaningful conversations on various platforms.",
  alternates: {
    canonical: "/blog/post/unlocking-engaging-discussions-with-hyperwrites-discussion-post-commenter",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unlocking Engaging Discussions with HyperWrite's Discussion Post Commenter"
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