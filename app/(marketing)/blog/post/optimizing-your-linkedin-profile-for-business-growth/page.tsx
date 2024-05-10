import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Optimizing Your LinkedIn Profile for Business Growth: Strategies for Success",
  description: "Discover effective strategies to optimize your LinkedIn profile and harness its potential for business growth. Learn how to create a compelling profile, build a strong network, and leverage LinkedIn's features to establish your professional brand and attract opportunities.",
  alternates: {
    canonical: "/blog/post/optimizing-your-linkedin-profile-for-business-growth",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Optimizing Your LinkedIn Profile for Business Growth: Strategies for Success"
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