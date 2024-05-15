import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Increasing Your Pinterest Followers",
  description: "Discover effective strategies for growing your Pinterest following, increasing engagement, and driving traffic to your website or blog.",
  alternates: {
    canonical: "/blog/post/strategies-for-increasing-your-pinterest-followers",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Increasing Your Pinterest Followers"
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