import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Building a Personal Brand as an Entrepreneur",
  description: "Explore the significance of social media in shaping the personal brand of entrepreneurs, and learn strategies to leverage social platforms effectively for brand building.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-building-a-personal-brand-as-an-entrepreneur",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Building a Personal Brand as an Entrepreneur"
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
