import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Social Media Content Strategy for E-commerce Brands",
  description: "Learn how to develop a comprehensive social media content strategy that helps your e-commerce brand engage customers, drive traffic, and boost sales. Discover best practices for creating and curating content that resonates with your target audience and aligns with your business goals.",
  alternates: {
    canonical: "/blog/post/creating-a-social-media-content-strategy-for-ecommerce-brands",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Social Media Content Strategy for E-commerce Brands"
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