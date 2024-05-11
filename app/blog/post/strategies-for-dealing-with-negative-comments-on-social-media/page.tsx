import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Dealing with Negative Comments on Social Media: Protecting Your Brand Reputation",
  description: "Learn effective strategies for dealing with negative comments on social media and protecting your brand reputation. Discover best practices for handling criticism, maintaining professionalism, and turning negative experiences into opportunities.",
  alternates: {
    canonical: "/blog/post/strategies-for-dealing-with-negative-comments-on-social-media",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Dealing with Negative Comments on Social Media: Protecting Your Brand Reputation"
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