import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Change Your LinkedIn Email Address: A Step-by-Step Guide",
  description: "Learn how to update your email address on LinkedIn. Follow our easy step-by-step guide to change your LinkedIn email and keep your account secure.",
  alternates: {
    canonical: "/blog/post/how-to-change-linkedin-email",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Change Your LinkedIn Email Address: A Step-by-Step Guide"
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