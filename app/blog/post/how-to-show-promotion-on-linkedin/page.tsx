import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Show a Promotion on LinkedIn: Showcase Your Career Growth",
  description: "Learn how to effectively showcase your promotion on LinkedIn. Follow our step-by-step guide to update your profile and share your career advancement with your network.",
  alternates: {
    canonical: "/blog/post/how-to-show-promotion-on-linkedin",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Show a Promotion on LinkedIn: Showcase Your Career Growth"
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