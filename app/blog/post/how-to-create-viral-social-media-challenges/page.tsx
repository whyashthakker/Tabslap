import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Create Viral Social Media Challenges: Strategies for Explosive Engagement",
  description: "Discover the secrets behind creating viral social media challenges that captivate audiences and drive explosive engagement. Learn proven strategies and best practices for designing challenges that inspire participation and drive brand visibility.",
  alternates: {
    canonical: "/blog/post/how-to-create-viral-social-media-challenges",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Create Viral Social Media Challenges: Strategies for Explosive Engagement"
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