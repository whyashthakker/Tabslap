import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Importance of Social Media in E-commerce: Boosting Sales and Brand Awareness",
  description: "Discover the crucial role of social media in e-commerce and learn how to leverage social platforms to boost sales, increase brand awareness, and engage with your target audience.",
  alternates: {
    canonical: "/blog/post/the-importance-of-social-media-in-ecommerce",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Importance of Social Media in E-commerce: Boosting Sales and Brand Awareness"
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