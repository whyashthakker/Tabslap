import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Engaging with Your Audience Through Social Media Comments: Building Relationships and Trust",
  description: "Learn how to effectively engage with your audience through social media comments. Discover strategies for building relationships, fostering trust, and creating a loyal community around your brand.",
  alternates: {
    canonical: "/blog/post/engaging-with-your-audience-through-social-media-comments",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Engaging with Your Audience Through Social Media Comments: Building Relationships and Trust"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}