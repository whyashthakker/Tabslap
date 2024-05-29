import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Best Chrome Add-Ons: Enhance Your Browsing Experience",
  description: "Discover the best Chrome add-ons to boost your productivity, enhance your browsing experience, and unlock new features. Our curated list includes top-rated extensions for various use cases.",
  alternates: {
    canonical: "/blog/post/best-chrome-add-ons",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Best Chrome Add-Ons: Enhance Your Browsing Experience"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}