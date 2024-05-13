import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Benefits of Social Media Listening: Gain Valuable Insights and Improve Your Strategy",
  description: "Discover the power of social media listening and how it can help you gain valuable insights, improve your social media strategy, and enhance your brand's reputation. Learn the key benefits and best practices for effective social media listening.",
  alternates: {
    canonical: "/blog/post/the-benefits-of-social-media-listening",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Benefits of Social Media Listening: Gain Valuable Insights and Improve Your Strategy"
        datePublished="2024-05-13T08:00:00+00:00"
        dateModified="2024-05-13T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}