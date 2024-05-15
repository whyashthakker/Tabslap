import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Building Brand Partnerships",
  description: "Discover how social media can be a powerful tool for building strategic brand partnerships that drive mutual growth, expand reach, and create valuable synergies.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-building-brand-partnerships",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Building Brand Partnerships"
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