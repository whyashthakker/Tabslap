import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on the Fashion Industry", 
  description: "Explore how social media has revolutionized the fashion industry, from influencer marketing and trend forecasting to brand engagement and e-commerce. Discover the key ways social media is shaping the future of fashion.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-the-fashion-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on the Fashion Industry"
        datePublished="2024-05-14T08:00:00+00:00" 
        dateModified="2024-05-14T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}