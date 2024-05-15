import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Event Recaps",
  description: "Learn how to leverage social media platforms to create engaging, informative, and shareable event recaps that extend the life of your events and drive ongoing engagement with your audience.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-event-recaps",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Event Recaps"
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