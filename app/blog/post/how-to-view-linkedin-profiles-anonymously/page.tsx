import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to View LinkedIn Profiles Anonymously: Protect Your Privacy",
  description: "Learn how to browse LinkedIn profiles anonymously, maintaining your privacy while researching potential connections, competitors, or industry experts.",
  alternates: {
    canonical: "/blog/post/how-to-view-linkedin-profiles-anonymously",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to View LinkedIn Profiles Anonymously: Protect Your Privacy"
        datePublished="2024-05-28T08:00:00+00:00"
        dateModified="2024-05-28T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}