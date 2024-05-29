import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to View a LinkedIn Profile Anonymously: A Step-by-Step Guide",
  description: "Learn how to view LinkedIn profiles anonymously without leaving a trace. Discover the steps to browse profiles privately and maintain your privacy on the platform.",
  alternates: {
    canonical: "/blog/post/how-to-view-a-linkedin-profile-anonymously",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to View a LinkedIn Profile Anonymously: A Step-by-Step Guide"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}