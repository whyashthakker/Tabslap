import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of Social Media in Influencing Purchasing Decisions: Harnessing the Power of Digital Influence",
  description: "Discover how social media plays a crucial role in influencing consumer purchasing decisions. Learn strategies to leverage social media platforms and digital influence to drive sales and build brand loyalty.",
  alternates: {
    canonical: "/blog/post/the-role-of-social-media-in-influencing-purchasing-decisions",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of Social Media in Influencing Purchasing Decisions: Harnessing the Power of Digital Influence"
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