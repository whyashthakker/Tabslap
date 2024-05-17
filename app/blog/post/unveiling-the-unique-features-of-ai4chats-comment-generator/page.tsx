import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unveiling the Unique Features of AI4Chat's Comment Generator",
  description: "Discover what sets AI4Chat's comment generator apart from the rest. Explore its unique features, advanced technologies, and capabilities that revolutionize comment generation for enhanced user engagement.",
  alternates: {
    canonical: "/blog/post/unveiling-the-unique-features-of-ai4chats-comment-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unveiling the Unique Features of AI4Chat's Comment Generator"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}