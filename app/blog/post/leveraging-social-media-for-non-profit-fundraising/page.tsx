import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Leveraging Social Media for Non-Profit Fundraising: Strategies for Success",
  description: "Discover effective strategies for leveraging social media to boost your non-profit's fundraising efforts. Learn how to engage supporters, build awareness, and drive donations through social media platforms.",
  alternates: {
    canonical: "/blog/post/leveraging-social-media-for-non-profit-fundraising",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Leveraging Social Media for Non-Profit Fundraising: Strategies for Success"
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