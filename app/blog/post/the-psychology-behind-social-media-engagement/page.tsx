import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Psychology Behind Social Media Engagement: Understanding User Behavior",
  description: "Explore the psychological factors that drive social media engagement and learn how to leverage these insights to create compelling content, foster meaningful interactions, and build loyal communities on social platforms.",
  alternates: {
    canonical: "/blog/post/the-psychology-behind-social-media-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Psychology Behind Social Media Engagement: Understanding User Behavior"
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