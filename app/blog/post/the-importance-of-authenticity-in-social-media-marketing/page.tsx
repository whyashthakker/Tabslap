import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Importance of Authenticity in Social Media Marketing: Building Trust and Credibility",
  description: "Discover why authenticity is crucial in social media marketing. Learn strategies for building trust and credibility with your audience through genuine and transparent social media practices.",
  alternates: {
    canonical: "/blog/post/the-importance-of-authenticity-in-social-media-marketing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Importance of Authenticity in Social Media Marketing: Building Trust and Credibility"
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