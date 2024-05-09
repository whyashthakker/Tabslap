import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Increase Engagement on Social Media Posts: Proven Strategies",
  description: "Discover proven strategies and tactics to boost engagement on your social media posts. Learn how to create compelling content, leverage hashtags, and engage with your audience to maximize your social media impact.",
  alternates: {
    canonical: "/blog/post/how-to-increase-engagement-on-social-media-posts",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Increase Engagement on Social Media Posts: Proven Strategies"
        datePublished="2024-05-08T08:00:00+00:00"
        dateModified="2024-05-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}