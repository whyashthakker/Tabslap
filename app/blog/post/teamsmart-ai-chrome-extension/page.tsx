import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "TeamSmart AI Chrome Extension: Unleashing the Power of Collaborative Intelligence",
  description: "Discover the revolutionary TeamSmart AI Chrome Extension that harnesses the power of AI to enhance team collaboration, productivity, and decision-making.",
  alternates: {
    canonical: "/blog/post/teamsmart-ai-chrome-extension",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="TeamSmart AI Chrome Extension: Unleashing the Power of Collaborative Intelligence"
        datePublished="2024-06-07T08:00:00+00:00"
        dateModified="2024-06-07T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}