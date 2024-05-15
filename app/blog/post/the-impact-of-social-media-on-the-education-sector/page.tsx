import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on the Education Sector",
  description: "Explore the profound impact of social media on the education sector, from enhancing learning experiences and facilitating collaboration to promoting digital literacy and preparing students for the future workforce.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-the-education-sector",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on the Education Sector"
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