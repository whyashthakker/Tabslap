import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Customer Case Studies",
  description: "Learn how to leverage social media platforms to create powerful customer case studies that build trust, showcase your brand's value, and drive conversions. Discover best practices for finding, crafting, and promoting compelling case studies on social media.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-customer-case-studies",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Customer Case Studies"
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