import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Navigating the World of Paid Social Media Advertising: Strategies for Success",
  description: "Explore the complex world of paid social media advertising and learn effective strategies to maximize your ad spend, target the right audience, and achieve your marketing goals. Discover best practices and tips for success in the competitive landscape of social media advertising.",
  alternates: {
    canonical: "/blog/post/navigating-the-world-of-paid-social-media-advertising",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Navigating the World of Paid Social Media Advertising: Strategies for Success"
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