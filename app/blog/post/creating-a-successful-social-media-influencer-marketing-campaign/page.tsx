import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Successful Social Media Influencer Marketing Campaign",
  description: "Learn how to create a winning social media influencer marketing campaign. Discover the key steps, best practices, and strategies for partnering with influencers to promote your brand and drive engagement.",
  alternates: {
    canonical: "/blog/post/creating-a-successful-social-media-influencer-marketing-campaign",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Successful Social Media Influencer Marketing Campaign"
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