import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Increasing Your Facebook Page Likes: Boost Your Online Presence",
  description: "Discover effective strategies to increase your Facebook page likes and boost your online presence. From engaging content to targeted advertising, learn how to grow your Facebook audience and enhance your brand's reach.",
  alternates: {
    canonical: "/blog/post/strategies-for-increasing-your-facebook-page-likes",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Increasing Your Facebook Page Likes: Boost Your Online Presence"
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