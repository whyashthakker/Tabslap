import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Benefits of Using an AI Comment Generator: Boosting Engagement and Efficiency",
  description: "Discover the advantages of using an AI comment generator for your social media strategy. From saving time to increasing engagement, explore how AI can revolutionize your online presence.",
  alternates: {
    canonical: "/blog/post/benefits-of-using-an-ai-comment-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Benefits of Using an AI Comment Generator: Boosting Engagement and Efficiency"
        datePublished="2024-05-16T08:00:00+00:00"
        dateModified="2024-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}