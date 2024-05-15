import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Social Media Content Strategy for Startups",
  description: "Learn how to develop a comprehensive social media content strategy that helps your startup build brand awareness, engage with your target audience, and drive business growth.",
  alternates: {
    canonical: "/blog/post/creating-a-social-media-content-strategy-for-startups",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Social Media Content Strategy for Startups"
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