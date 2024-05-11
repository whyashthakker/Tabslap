import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Benefits of Social Media Collaboration with Other Brands: Boosting Reach and Engagement",
  description: "Discover the benefits of collaborating with other brands on social media to boost your reach, engagement, and brand awareness. Learn strategies for successful partnerships and maximizing the impact of your collaborative efforts.",
  alternates: {
    canonical: "/blog/post/the-benefits-of-social-media-collaboration-with-other-brands",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Benefits of Social Media Collaboration with Other Brands: Boosting Reach and Engagement"
        datePublished="2024-05-11T08:00:00+00:00"
        dateModified="2024-05-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}