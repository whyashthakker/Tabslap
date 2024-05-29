import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "LinkedIn Background Photo Dimensions: How to Create the Perfect Cover Image",
  description: "Learn the optimal LinkedIn background photo dimensions and best practices to create a visually appealing and professional cover image that showcases your personal brand.",
  alternates: {
    canonical: "/blog/post/linkedin-background-photo-dimensions",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="LinkedIn Background Photo Dimensions: How to Create the Perfect Cover Image"
        datePublished="2024-05-28T08:00:00+00:00"
        dateModified="2024-05-28T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}