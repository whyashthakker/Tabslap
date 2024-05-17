import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generators for Professional Platforms: Enhancing LinkedIn Engagement",
  description: "Explore the availability and benefits of AI comment generators for professional platforms like LinkedIn. Discover how these tools can help you enhance your engagement and build meaningful connections in a professional context.",
  alternates: {
    canonical: "/blog/post/ai-comment-generators-for-professional-platforms-enhancing-linkedin-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generators for Professional Platforms: Enhancing LinkedIn Engagement"
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