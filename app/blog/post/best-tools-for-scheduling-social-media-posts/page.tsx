import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Best Tools for Scheduling Social Media Posts: Streamline Your Social Media Management",
  description: "Discover the best tools for scheduling social media posts and streamline your social media management. Boost your efficiency and productivity with these powerful solutions.",
  alternates: {
    canonical: "/blog/post/best-tools-for-scheduling-social-media-posts",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Best Tools for Scheduling Social Media Posts: Streamline Your Social Media Management"
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