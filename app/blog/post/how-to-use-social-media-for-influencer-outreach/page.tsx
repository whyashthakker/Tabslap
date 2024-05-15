import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Influencer Outreach",
  description: "Learn effective strategies for using social media to identify, connect, and collaborate with influencers in your industry. Discover best practices for building successful influencer partnerships that drive brand awareness, engagement, and conversions.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-influencer-outreach",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Influencer Outreach"
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