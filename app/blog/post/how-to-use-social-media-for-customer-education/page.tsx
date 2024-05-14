import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Customer Education",
  description: "Discover effective strategies for using social media to educate your customers, build trust, and foster loyalty. Learn how to create valuable content, engage with your audience, and measure the impact of your customer education efforts on social media.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-customer-education",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Customer Education"
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