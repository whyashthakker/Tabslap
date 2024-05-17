import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Exploring the Features of LinkedIn Comment Generator: Enhancing LinkedIn Engagement",
  description: "Discover the powerful features of LinkedIn Comment Generator and how they can help you enhance your LinkedIn engagement. Learn about automated comment generation, personalization, analytics, and more.",
  alternates: {
    canonical: "/blog/post/exploring-the-features-of-linkedin-comment-generator-enhancing-linkedin-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Exploring the Features of LinkedIn Comment Generator: Enhancing LinkedIn Engagement"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}