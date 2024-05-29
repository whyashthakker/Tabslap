import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Boost Your LinkedIn Presence with Social Selling Index Check",
  description: "Discover how to leverage LinkedIn's Social Selling Index (SSI) to measure and improve your social selling effectiveness, build your professional brand, and generate leads.",
  alternates: {
    canonical: "/blog/post/boost-your-linkedin-presence-with-social-selling-index-check",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Boost Your LinkedIn Presence with Social Selling Index Check"
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