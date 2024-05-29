import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Top 10 Must-Have Chrome Addons for Enhanced Productivity and Browsing",
  description: "Discover the best Chrome addons that can revolutionize your browsing experience, boost productivity, and unlock a world of convenient features.",
  alternates: {
    canonical: "/blog/post/top-10-must-have-chrome-addons",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Top 10 Must-Have Chrome Addons for Enhanced Productivity and Browsing"
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