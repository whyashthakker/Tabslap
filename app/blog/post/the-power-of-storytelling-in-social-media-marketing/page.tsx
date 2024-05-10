import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of Storytelling in Social Media Marketing: Engage and Inspire Your Audience",
  description: "Discover the art of storytelling in social media marketing. Learn how to craft compelling stories that engage and inspire your audience, build emotional connections, and drive business growth.",
  alternates: {
    canonical: "/blog/post/the-power-of-storytelling-in-social-media-marketing",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of Storytelling in Social Media Marketing: Engage and Inspire Your Audience"
        datePublished="2024-05-08T08:00:00+00:00"
        dateModified="2024-05-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}