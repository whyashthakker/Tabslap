import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Post a Promotion on LinkedIn: Boost Your Visibility and Reach",
  description: "Learn the best practices and strategies for posting a promotion on LinkedIn to maximize visibility, engage your audience, and drive results for your business or personal brand.",
  alternates: {
    canonical: "/blog/post/how-to-post-a-promotion-on-linkedin",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Post a Promotion on LinkedIn: Boost Your Visibility and Reach"
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