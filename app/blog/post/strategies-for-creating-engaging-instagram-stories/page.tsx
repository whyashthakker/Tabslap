import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Creating Engaging Instagram Stories: Boost Your Social Media Presence",
  description: "Discover effective strategies for creating captivating Instagram Stories that engage your audience and enhance your social media presence. Learn tips and best practices to make your Stories stand out.",
  alternates: {
    canonical: "/blog/post/strategies-for-creating-engaging-instagram-stories",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Creating Engaging Instagram Stories: Boost Your Social Media Presence"
        datePublished="2024-05-13T08:00:00+00:00"
        dateModified="2024-05-13T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}