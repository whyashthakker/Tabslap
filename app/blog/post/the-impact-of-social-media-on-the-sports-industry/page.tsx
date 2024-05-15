import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on the Sports Industry",
  description: "Explore the profound impact of social media on the sports industry, from fan engagement and athlete branding to live streaming and sponsorship opportunities.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-the-sports-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on the Sports Industry"
        datePublished="2024-05-15T08:00:00+00:00"
        dateModified="2024-05-15T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}