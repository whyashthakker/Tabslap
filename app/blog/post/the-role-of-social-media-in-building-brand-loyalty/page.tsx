import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Building Brand Loyalty: Fostering Meaningful Connections",
  description: "Explore the crucial role of social media in building brand loyalty and fostering meaningful connections with your customers. Discover strategies for creating a loyal and engaged community around your brand.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-building-brand-loyalty",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Building Brand Loyalty: Fostering Meaningful Connections"
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