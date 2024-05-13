import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for SEO: Boosting Your Search Engine Rankings",
  description: "Discover effective strategies for leveraging social media to improve your SEO efforts. Learn how to optimize your social media profiles, create engaging content, build high-quality backlinks, and drive targeted traffic to boost your search engine rankings.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-seo",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for SEO: Boosting Your Search Engine Rankings"
        datePublished="2024-05-13T08:00:00+00:00"
        dateModified="2024-05-13T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}