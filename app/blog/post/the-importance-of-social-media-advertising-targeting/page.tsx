import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Importance of Social Media Advertising Targeting",
  description: "Discover the importance of social media advertising targeting and how it can help businesses maximize their ROI, reach the right audience, and achieve their marketing goals.",
  alternates: {
    canonical: "/blog/post/the-importance-of-social-media-advertising-targeting",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Importance of Social Media Advertising Targeting"
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