import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Change Your Email in LinkedIn: A Step-by-Step Guide",
  description: "Learn how to easily update your email address in LinkedIn, ensuring you stay connected with your professional network and receive important notifications.",
  alternates: {
    canonical: "/blog/post/how-to-change-your-email-in-linkedin",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Change Your Email in LinkedIn: A Step-by-Step Guide"
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