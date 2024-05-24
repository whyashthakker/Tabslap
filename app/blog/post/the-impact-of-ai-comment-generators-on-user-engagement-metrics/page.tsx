import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of AI Comment Generators on User Engagement Metrics",
  description: "Explore how AI comment generators influence user engagement metrics on social media platforms. Learn about the key metrics affected and the potential implications for your social media strategy.",
  alternates: {
    canonical: "/blog/post/the-impact-of-ai-comment-generators-on-user-engagement-metrics",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of AI Comment Generators on User Engagement Metrics"
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