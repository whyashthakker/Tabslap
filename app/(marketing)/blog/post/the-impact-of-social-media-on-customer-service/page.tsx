import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Impact of Social Media on Customer Service: Transforming the Customer Experience",
  description: "Explore the profound impact of social media on customer service and how it has transformed the customer experience. Learn strategies for leveraging social media to deliver exceptional customer service and build strong customer relationships.",
  alternates: {
    canonical: "/blog/post/the-impact-of-social-media-on-customer-service",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Impact of Social Media on Customer Service: Transforming the Customer Experience"
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