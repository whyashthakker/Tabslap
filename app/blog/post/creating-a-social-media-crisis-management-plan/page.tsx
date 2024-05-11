import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Creating a Social Media Crisis Management Plan: Protecting Your Brand Reputation",
  description: "Learn how to create a comprehensive social media crisis management plan to protect your brand reputation and navigate potential crises effectively. Discover key strategies, best practices, and real-world examples to help you prepare for and respond to social media emergencies.",
  alternates: {
    canonical: "/blog/post/creating-a-social-media-crisis-management-plan",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Creating a Social Media Crisis Management Plan: Protecting Your Brand Reputation"
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