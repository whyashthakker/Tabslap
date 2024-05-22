import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Do AI Comment Generators Support Influencer Marketing?",
  description: "Discover how AI comment generators can revolutionize influencer marketing by automating engagement, providing valuable insights, and enhancing the authenticity of brand-influencer collaborations.",
  alternates: {
    canonical: "/blog/post/how-do-ai-comment-generators-support-influencer-marketing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Do AI Comment Generators Support Influencer Marketing?"
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