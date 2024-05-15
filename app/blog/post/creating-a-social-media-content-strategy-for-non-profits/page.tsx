import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Social Media Content Strategy for Non-Profits",
  description: "Learn how to develop an effective social media content strategy tailored to the unique needs and goals of non-profit organizations, driving engagement, awareness, and support for your cause.",
  alternates: {
    canonical: "/blog/post/creating-a-social-media-content-strategy-for-non-profits",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Social Media Content Strategy for Non-Profits"
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