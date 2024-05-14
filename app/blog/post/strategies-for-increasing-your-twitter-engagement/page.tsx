import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Increasing Your Twitter Engagement",
  description: "Discover proven strategies to boost your Twitter engagement and grow your audience. Learn how to create compelling content, interact with users, leverage hashtags, and analyze your performance to maximize your impact on Twitter.",
  alternates: {
    canonical: "/blog/post/strategies-for-increasing-your-twitter-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Increasing Your Twitter Engagement"
        datePublished="2024-05-14T08:00:00+00:00"
        dateModified="2024-05-14T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}