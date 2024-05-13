import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Building Personal Relationships",
  description: "Explore the impact of social media on personal relationships and how it has transformed the way we connect, communicate, and maintain bonds with others. Discover the benefits, challenges, and best practices for building and nurturing personal relationships through social media platforms.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-building-personal-relationships",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Building Personal Relationships"
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