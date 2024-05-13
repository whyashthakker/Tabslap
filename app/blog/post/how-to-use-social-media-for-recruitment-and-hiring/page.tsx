import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Recruitment and Hiring: Attracting Top Talent in the Digital Age",
  description: "Discover effective strategies for leveraging social media in your recruitment and hiring process. Learn how to attract top talent, build your employer brand, and streamline your hiring efforts using social media platforms.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-recruitment-and-hiring",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Recruitment and Hiring: Attracting Top Talent in the Digital Age"
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