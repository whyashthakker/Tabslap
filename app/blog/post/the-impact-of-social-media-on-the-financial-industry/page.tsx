import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on the Financial Industry",
  description: "Explore how social media is transforming the financial industry, from customer engagement and financial education to risk management and crisis communication. Learn best practices for financial institutions to leverage social media while navigating regulatory and reputational challenges.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-the-financial-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on the Financial Industry"
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