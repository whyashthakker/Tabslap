import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Top AI Tools for Creating and Managing Social Media Campaigns",
  description: "Discover the best AI tools to streamline your social media campaigns, from content creation to performance tracking, and boost your online presence.",
  alternates: {
    canonical: "/blog/post/top-ai-tools-for-creating-and-managing-social-media-campaigns",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Top AI Tools for Creating and Managing Social Media Campaigns"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}