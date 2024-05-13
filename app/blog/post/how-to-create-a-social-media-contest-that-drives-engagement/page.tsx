import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Create a Social Media Contest That Drives Engagement",
  description: "Learn how to create a compelling social media contest that drives engagement, increases brand awareness, and grows your audience. Discover the key elements, best practices, and examples of successful social media contests.",
  alternates: {
    canonical: "/blog/post/how-to-create-a-social-media-contest-that-drives-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Create a Social Media Contest That Drives Engagement"
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