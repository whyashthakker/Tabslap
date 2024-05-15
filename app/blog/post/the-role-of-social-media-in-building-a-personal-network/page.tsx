import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Building a Personal Network",
  description: "Discover how social media can be a powerful tool for building and nurturing your personal network, opening up new opportunities for personal and professional growth.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-building-a-personal-network",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Building a Personal Network"
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