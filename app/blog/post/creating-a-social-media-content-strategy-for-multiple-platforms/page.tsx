import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Social Media Content Strategy for Multiple Platforms",
  description: "Learn how to develop a comprehensive social media content strategy that effectively reaches and engages your target audience across multiple platforms. Discover tips and best practices for creating, curating, and distributing content that resonates with your audience and achieves your business goals.",
  alternates: {
    canonical: "/blog/post/creating-a-social-media-content-strategy-for-multiple-platforms",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Social Media Content Strategy for Multiple Platforms"
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