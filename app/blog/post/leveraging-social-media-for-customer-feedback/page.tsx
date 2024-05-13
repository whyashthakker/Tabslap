import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Leveraging Social Media for Customer Feedback: Strategies and Best Practices",
  description: "Discover how to effectively leverage social media platforms to gather valuable customer feedback. Learn strategies and best practices for using social media to listen to your customers, gain insights, and improve your products or services.",
  alternates: {
    canonical: "/blog/post/leveraging-social-media-for-customer-feedback",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Leveraging Social Media for Customer Feedback: Strategies and Best Practices"
        datePublished="2024-05-13T08:00:00+00:00"
        dateModified="2024-05-13T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}