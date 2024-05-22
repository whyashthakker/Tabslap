import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of AI Comment Generators in Digital Marketing",
  description: "Discover how AI comment generators are transforming digital marketing strategies, enhancing engagement, and driving conversions.",
  alternates: {
    canonical: "/blog/post/role-of-ai-comment-generators-in-digital-marketing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of AI Comment Generators in Digital Marketing"
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