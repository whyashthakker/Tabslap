import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of Social Media in the Automotive Industry",
  description: "Explore how social media is transforming the automotive industry, from marketing and customer engagement to product development and innovation. Discover strategies for leveraging social media to drive success in the competitive automotive landscape.",
  alternates: {
    canonical: "/blog/post/the-power-of-social-media-in-the-automotive-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of Social Media in the Automotive Industry"
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