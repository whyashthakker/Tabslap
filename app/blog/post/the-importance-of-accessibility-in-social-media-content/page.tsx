import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Importance of Accessibility in Social Media Content: Creating an Inclusive Online Experience",
  description: "Discover the importance of accessibility in social media content and learn how to create an inclusive online experience for all users. Explore best practices, tools, and strategies for making your social media content accessible to people with disabilities.",
  alternates: {
    canonical: "/blog/post/the-importance-of-accessibility-in-social-media-content",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Importance of Accessibility in Social Media Content: Creating an Inclusive Online Experience"
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