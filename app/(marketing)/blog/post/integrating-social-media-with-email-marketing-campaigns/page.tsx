import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Integrating Social Media with Email Marketing Campaigns: Strategies for Amplified Results",
  description: "Discover effective strategies for integrating social media with email marketing campaigns to amplify your reach, engagement, and conversion rates. Learn how to leverage the power of both channels to create a cohesive and impactful marketing approach.",
  alternates: {
    canonical: "/blog/post/integrating-social-media-with-email-marketing-campaigns",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Integrating Social Media with Email Marketing Campaigns: Strategies for Amplified Results"
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