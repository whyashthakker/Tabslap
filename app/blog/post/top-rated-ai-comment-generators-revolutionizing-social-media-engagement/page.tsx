import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Top-Rated AI Comment Generators: Revolutionizing Social Media Engagement",
  description: "Discover the top-rated AI comment generators that can revolutionize your social media engagement. Learn how these tools can help you boost interaction, save time, and grow your online presence.",
  alternates: {
    canonical: "/blog/post/top-rated-ai-comment-generators-revolutionizing-social-media-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Top-Rated AI Comment Generators: Revolutionizing Social Media Engagement"
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