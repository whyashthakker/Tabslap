import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "People.ai Chrome Extension: Empowering Sales Teams with AI-Driven Insights",
  description: "Discover how the People.ai Chrome Extension revolutionizes sales productivity and effectiveness by providing AI-powered insights, contact intelligence, and workflow automation.",
  alternates: {
    canonical: "/blog/post/people-ai-chrome-extension-empowering-sales-teams-with-ai-driven-insights",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="People.ai Chrome Extension: Empowering Sales Teams with AI-Driven Insights"
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