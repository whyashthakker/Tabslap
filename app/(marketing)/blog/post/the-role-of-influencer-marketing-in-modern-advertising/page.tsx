import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Influencer Marketing in Modern Advertising: Harnessing the Power of Social Influence",
  description: "Explore the growing role of influencer marketing in modern advertising and learn how to leverage the power of social influence to reach your target audience, build brand awareness, and drive conversions.",
  alternates: {
    canonical: "/blog/post/the-role-of-influencer-marketing-in-modern-advertising",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Influencer Marketing in Modern Advertising: Harnessing the Power of Social Influence"
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