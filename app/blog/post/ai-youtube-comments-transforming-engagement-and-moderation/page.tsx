import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI YouTube Comments: Transforming Engagement and Moderation",
  description: "Explore how AI is revolutionizing YouTube comments, enhancing user engagement, and streamlining comment moderation for creators and viewers alike.",
  alternates: {
    canonical: "/blog/post/ai-youtube-comments-transforming-engagement-and-moderation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI YouTube Comments: Transforming Engagement and Moderation"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}