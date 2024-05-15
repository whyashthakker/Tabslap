import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Customer Surveys",
  description: "Learn how to leverage social media platforms to conduct effective customer surveys, gather valuable insights, and improve your products or services based on customer feedback.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-customer-surveys",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Customer Surveys"
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