import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Building Brand Awareness",
  description: "Discover how social media can help businesses build brand awareness, establish their online presence, and connect with their target audience. Learn the key strategies and best practices for leveraging social media to increase brand visibility and recognition.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-building-brand-awareness",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Building Brand Awareness"
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