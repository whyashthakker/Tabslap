import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Pros and Cons of Using AI Comment Generators for Social Media Engagement",
  description: "Explore the advantages and disadvantages of using AI comment generators for social media engagement. Learn how these tools can impact your online presence and make an informed decision.",
  alternates: {
    canonical: "/blog/post/the-pros-and-cons-of-using-ai-comment-generators-for-social-media-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Pros and Cons of Using AI Comment Generators for Social Media Engagement"
        datePublished="2024-05-23T08:00:00+00:00"
        dateModified="2024-05-23T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}