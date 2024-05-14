import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Lead Nurturing",
  description: "Discover effective strategies for using social media to nurture leads and guide them through the sales funnel. Learn how to engage with prospects, provide value, and build trust to convert leads into customers.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-lead-nurturing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Lead Nurturing"
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