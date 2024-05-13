import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Social Media Employee Advocacy Program: Empowering Your Workforce",
  description: "Learn how to create a successful social media employee advocacy program that empowers your workforce, amplifies your brand's reach, and drives business growth. Discover best practices and strategies for implementing an effective employee advocacy initiative.",
  alternates: {
    canonical: "/blog/post/creating-a-social-media-employee-advocacy-program",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Social Media Employee Advocacy Program: Empowering Your Workforce"
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