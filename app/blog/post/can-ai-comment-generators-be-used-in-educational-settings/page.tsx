import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Can AI Comment Generators Be Used in Educational Settings?",
  description: "Explore the potential applications and benefits of AI comment generators in educational settings, enhancing student engagement, facilitating discussions, and promoting collaborative learning.",
  alternates: {
    canonical: "/blog/post/can-ai-comment-generators-be-used-in-educational-settings",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Can AI Comment Generators Be Used in Educational Settings?"
        datePublished="2024-05-21T08:00:00+00:00"
        dateModified="2024-05-21T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}