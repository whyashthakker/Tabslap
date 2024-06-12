import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Banner Generator: Elevate Your Marketing with Eye-Catching Banners",
  description: "Discover how AI text banner generators can revolutionize your marketing efforts by creating visually stunning and engaging banners in minutes.",
  alternates: {
    canonical: "/blog/post/ai-text-banner-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Banner Generator: Elevate Your Marketing with Eye-Catching Banners"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}