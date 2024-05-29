import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Future of AI in Social Media: Trends to Watch in 2024",
  description: "Explore the emerging trends and innovations shaping the future of AI in social media, from personalized content to virtual influencers and beyond.",
  alternates: {
    canonical: "/blog/post/the-future-of-ai-in-social-media-trends-to-watch-in-2024",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Future of AI in Social Media: Trends to Watch in 2024"
        datePublished="2024-05-28T08:00:00+00:00"
        dateModified="2024-05-28T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}