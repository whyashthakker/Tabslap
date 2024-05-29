import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Change Your Facebook Profile Picture Without Notifying Everyone",
  description: "Learn how to discreetly update your Facebook profile picture without sending notifications to all your friends. Discover the step-by-step guide and useful tips.",
  alternates: {
    canonical: "/blog/post/change-facebook-profile-picture-without-notifying",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Change Your Facebook Profile Picture Without Notifying Everyone"
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