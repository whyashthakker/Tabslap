import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Show a Promotion on LinkedIn: Celebrating Your Career Milestones",
  description: "Learn how to effectively showcase your career advancement by adding a promotion to your LinkedIn profile. Discover tips and best practices to highlight your achievements and attract new opportunities.",
  alternates: {
    canonical: "/blog/post/how-to-show-a-promotion-on-linkedin",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Show a Promotion on LinkedIn: Celebrating Your Career Milestones"
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