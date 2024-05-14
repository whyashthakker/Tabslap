import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Social Media Content Strategy for B2B Companies",
  description: "Learn how to develop an effective social media content strategy for your B2B company. Discover best practices for creating engaging content, choosing the right platforms, and measuring your success.",
  alternates: {
    canonical: "/blog/post/creating-a-social-media-content-strategy-for-b2b-companies",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Social Media Content Strategy for B2B Companies"
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