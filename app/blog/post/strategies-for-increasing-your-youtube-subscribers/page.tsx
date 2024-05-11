import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Increasing Your YouTube Subscribers: Grow Your Channel and Reach",
  description: "Discover proven strategies for increasing your YouTube subscribers and growing your channel's reach. Learn how to create compelling content, optimize your videos, and engage with your audience to build a loyal following.",
  alternates: {
    canonical: "/blog/post/strategies-for-increasing-your-youtube-subscribers",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Increasing Your YouTube Subscribers: Grow Your Channel and Reach"
        datePublished="2024-05-11T08:00:00+00:00"
        dateModified="2024-05-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}