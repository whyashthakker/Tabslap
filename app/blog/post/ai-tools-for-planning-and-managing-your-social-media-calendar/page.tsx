import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Tools for Planning and Managing Your Social Media Calendar",
  description: "Discover how AI tools can help you streamline your social media planning, scheduling, and management, saving you time and boosting your online presence.",
  alternates: {
    canonical: "/blog/post/ai-tools-for-planning-and-managing-your-social-media-calendar",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Tools for Planning and Managing Your Social Media Calendar"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}