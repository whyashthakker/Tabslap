import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Best Practices for Managing a Facebook Group: Fostering Engagement and Community",
  description: "Discover the best practices for effectively managing a Facebook group. Learn strategies to foster engagement, build a thriving community, and achieve your group's goals.",
  alternates: {
    canonical: "/blog/post/best-practices-for-managing-a-facebook-group",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Best Practices for Managing a Facebook Group: Fostering Engagement and Community"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}