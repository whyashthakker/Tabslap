import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Use Social Media for Product Launches: Strategies for a Successful Launch",
  description: "Learn effective strategies for using social media to launch your new products successfully. Discover tips for creating buzz, engaging your audience, and driving sales through social media channels.",
  alternates: {
    canonical: "/blog/post/how-to-use-social-media-for-product-launches",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Use Social Media for Product Launches: Strategies for a Successful Launch"
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