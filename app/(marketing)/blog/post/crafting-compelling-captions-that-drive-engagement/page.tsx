import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Crafting Compelling Captions That Drive Engagement: Tips and Strategies",
  description: "Learn how to create captivating captions for your social media posts that boost engagement, increase reach, and connect with your audience.",
  alternates: {
    canonical: "/blog/post/crafting-compelling-captions-that-drive-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Crafting Compelling Captions That Drive Engagement: Tips and Strategies"
        datePublished="2024-05-10T08:00:00+00:00"
        dateModified="2024-05-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}