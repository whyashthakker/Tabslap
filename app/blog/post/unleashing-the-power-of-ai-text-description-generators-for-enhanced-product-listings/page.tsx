import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing the Power of AI Text Description Generators for Enhanced Product Listings",
  description: "Discover how AI text description generators are revolutionizing the way businesses create compelling product descriptions. Learn how these innovative tools can enhance your product listings, boost conversions, and streamline your e-commerce operations.",
  alternates: {
    canonical: "/blog/post/unleashing-the-power-of-ai-text-description-generators-for-enhanced-product-listings",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing the Power of AI Text Description Generators for Enhanced Product Listings"
        datePublished="2024-06-03T08:00:00+00:00"
        dateModified="2024-06-03T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}