import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Increasing Your LinkedIn Article Views",
  description: "Discover proven strategies to boost your LinkedIn article views, expand your reach, and establish yourself as a thought leader in your industry. Learn tips for creating compelling content, optimizing for search, and promoting your articles effectively.",
  alternates: {
    canonical: "/blog/post/strategies-for-increasing-your-linkedin-article-views",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Increasing Your LinkedIn Article Views"
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