import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of Social Media in the Food and Beverage Industry",
  description: "Explore the significant impact of social media on the food and beverage industry. Discover how businesses can leverage social media platforms to engage with customers, build brand awareness, drive sales, and stay ahead in a highly competitive market.",
  alternates: {
    canonical: "/blog/post/the-power-of-social-media-in-the-food-and-beverage-industry",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of Social Media in the Food and Beverage Industry"
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