import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How AI Can Enhance Your Social Media Listening Strategy",
  description: "Discover how AI can take your social media listening to the next level, providing valuable insights and enabling data-driven decision-making for your brand.",
  alternates: {
    canonical: "/blog/post/how-ai-can-enhance-your-social-media-listening-strategy",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How AI Can Enhance Your Social Media Listening Strategy"
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