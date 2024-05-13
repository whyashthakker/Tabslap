import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Customer Retention: Strategies for Keeping Customers Engaged",
  description: "Discover effective strategies for using social media to retain customers and foster long-term loyalty. Learn how to engage with your audience, provide exceptional customer service, and create a sense of community that keeps customers coming back.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-customer-retention",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Customer Retention: Strategies for Keeping Customers Engaged"
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