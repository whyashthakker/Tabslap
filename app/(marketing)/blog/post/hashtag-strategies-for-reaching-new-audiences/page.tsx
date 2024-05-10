import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Hashtag Strategies for Reaching New Audiences: Expand Your Social Media Reach",
  description: "Discover effective hashtag strategies to expand your reach and connect with new audiences on social media. Learn how to research, create, and leverage hashtags for maximum impact.",
  alternates: {
    canonical: "/blog/post/hashtag-strategies-for-reaching-new-audiences",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Hashtag Strategies for Reaching New Audiences: Expand Your Social Media Reach"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}