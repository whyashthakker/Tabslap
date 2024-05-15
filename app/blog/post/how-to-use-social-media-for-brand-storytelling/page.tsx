import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Brand Storytelling",
  description: "Discover the power of brand storytelling on social media and learn strategies to create compelling narratives that resonate with your audience and drive engagement.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-brand-storytelling",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Brand Storytelling"
        datePublished="2024-05-15T08:00:00+00:00"
        dateModified="2024-05-15T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}