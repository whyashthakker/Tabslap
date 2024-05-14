import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of Social Media in the Beauty Industry",
  description: "Discover how social media has revolutionized the beauty industry, from influencer marketing and user-generated content to e-commerce and brand building. Learn about the impact of social media on beauty trends, consumer behavior, and the future of the industry.",
  alternates: {
    canonical: "/blog/post/the-power-of-social-media-in-the-beauty-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of Social Media in the Beauty Industry"
        datePublished="2024-05-14T08:00:00+00:00"
        dateModified="2024-05-14T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}