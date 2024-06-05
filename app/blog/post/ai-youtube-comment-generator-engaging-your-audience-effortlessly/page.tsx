import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI YouTube Comment Generator: Engaging Your Audience Effortlessly",
  description: "Discover how an AI YouTube Comment Generator can help you engage your audience, boost interaction, and grow your channel effortlessly.",
  alternates: {
    canonical: "/blog/post/ai-youtube-comment-generator-engaging-your-audience-effortlessly",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI YouTube Comment Generator: Engaging Your Audience Effortlessly"
        datePublished="2024-06-05T08:00:00+00:00"
        dateModified="2024-06-05T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}