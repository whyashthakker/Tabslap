import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Tag on LinkedIn: Boost Engagement and Visibility",
  description: "Learn how to effectively tag people, companies, and topics on LinkedIn to increase your post's engagement, reach, and visibility within your professional network.",
  alternates: {
    canonical: "/blog/post/how-to-tag-on-linkedin",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Tag on LinkedIn: Boost Engagement and Visibility"
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