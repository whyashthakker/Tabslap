import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How AI Comment Generators Improve Social Media ROI",
  description: "Discover how AI comment generators can boost your social media ROI by increasing engagement, saving time, and providing valuable insights for optimizing your strategy.",
  alternates: {
    canonical: "/blog/post/how-ai-comment-generators-improve-social-media-roi",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How AI Comment Generators Improve Social Media ROI"
        datePublished="2024-05-23T08:00:00+00:00"
        dateModified="2024-05-23T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}