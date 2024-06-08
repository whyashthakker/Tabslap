import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Upwork Chrome Extension AI: Empowering Freelancers with Intelligent Automation",
  description: "Discover how the Upwork Chrome Extension AI revolutionizes the way freelancers work on the Upwork platform, providing intelligent tools and automation for enhanced productivity and success.",
  alternates: {
    canonical: "/blog/post/upwork-chrome-extension-ai-empowering-freelancers-with-intelligent-automation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Upwork Chrome Extension AI: Empowering Freelancers with Intelligent Automation"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}