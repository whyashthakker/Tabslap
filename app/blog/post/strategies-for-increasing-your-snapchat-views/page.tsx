import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Strategies for Increasing Your Snapchat Views",
  description: "Discover proven strategies to boost your Snapchat views, engage your audience, and grow your presence on the platform. Learn tips for creating compelling content, leveraging Snapchat features, and promoting your account.",
  alternates: {
    canonical: "/blog/post/strategies-for-increasing-your-snapchat-views",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Strategies for Increasing Your Snapchat Views"
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