import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Can AI Comment Generators Handle Comments in Real-Time?",
  description: "Discover if AI comment generators can handle comments in real-time. Learn about the capabilities and limitations of real-time comment generation and its implications for engaging with your audience.",
  alternates: {
    canonical: "/blog/post/can-ai-comment-generators-handle-comments-in-real-time",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Can AI Comment Generators Handle Comments in Real-Time?"
        datePublished="2024-05-18T08:00:00+00:00"
        dateModified="2024-05-18T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}