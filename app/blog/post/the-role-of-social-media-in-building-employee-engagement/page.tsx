import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Building Employee Engagement",
  description: "Discover how social media can be leveraged to enhance employee engagement, foster a positive company culture, and improve internal communication. Learn best practices and strategies for using social media to connect, motivate, and empower your workforce.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-building-employee-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Building Employee Engagement"
        datePublished="2024-05-14T08:00:00+00:00"
        dateModified="2024-05-14T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}