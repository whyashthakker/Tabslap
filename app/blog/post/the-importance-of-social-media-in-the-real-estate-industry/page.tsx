import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Importance of Social Media in the Real Estate Industry",
  description: "Discover how social media is transforming the real estate industry and why it's crucial for real estate professionals to leverage social platforms for marketing, networking, and client engagement.",
  alternates: {
    canonical: "/blog/post/the-importance-of-social-media-in-the-real-estate-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Importance of Social Media in the Real Estate Industry"
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