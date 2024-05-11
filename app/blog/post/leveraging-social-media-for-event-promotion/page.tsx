import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Leveraging Social Media for Event Promotion: Strategies for Success",
  description: "Discover effective strategies and best practices for leveraging social media to promote your events, increase attendance, and create buzz.",
  alternates: {
    canonical: "/blog/post/leveraging-social-media-for-event-promotion",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Leveraging Social Media for Event Promotion: Strategies for Success"
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