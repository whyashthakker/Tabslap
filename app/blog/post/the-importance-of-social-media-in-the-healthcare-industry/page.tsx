import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Importance of Social Media in the Healthcare Industry",
  description: "Discover how social media is transforming the healthcare industry, from patient engagement and education to public health campaigns and crisis communication. Learn best practices for leveraging social media to improve health outcomes and drive innovation.",
  alternates: {
    canonical: "/blog/post/the-importance-of-social-media-in-the-healthcare-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Importance of Social Media in the Healthcare Industry"
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