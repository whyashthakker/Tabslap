import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on Political Campaigns: Reshaping the Electoral Landscape",
  description: "Explore the profound impact of social media on modern political campaigns and how it has reshaped the electoral landscape. Discover the key ways in which social media platforms influence voter engagement, campaign strategies, and public discourse.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-political-campaigns",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on Political Campaigns: Reshaping the Electoral Landscape"
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