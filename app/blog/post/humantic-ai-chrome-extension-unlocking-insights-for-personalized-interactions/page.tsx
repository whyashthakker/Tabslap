import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Humantic AI Chrome Extension: Unlocking Insights for Personalized Interactions",
  description: "Discover how the Humantic AI Chrome Extension empowers users with real-time insights and personalized recommendations for more effective communication and relationship-building.",
  alternates: {
    canonical: "/blog/post/humantic-ai-chrome-extension-unlocking-insights-for-personalized-interactions",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Humantic AI Chrome Extension: Unlocking Insights for Personalized Interactions"
        datePublished="2024-06-01T08:00:00+00:00"
        dateModified="2024-06-01T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}