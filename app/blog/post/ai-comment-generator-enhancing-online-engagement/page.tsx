import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generator: Enhancing Online Engagement and Interaction",
  description: "Discover how AI comment generators are transforming online discussions, increasing engagement, and fostering meaningful interactions on websites and social media platforms.",
  alternates: {
    canonical: "/blog/post/ai-comment-generator-enhancing-online-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generator: Enhancing Online Engagement and Interaction"
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