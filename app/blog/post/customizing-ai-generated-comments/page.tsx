import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Customizing AI-Generated Comments: Tailoring Engagement to Your Brand",
  description: "Discover the customization options available in AI comment generators and learn how to tailor AI-generated comments to align with your brand's voice, tone, and engagement goals.",
  alternates: {
    canonical: "/blog/post/customizing-ai-generated-comments",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Customizing AI-Generated Comments: Tailoring Engagement to Your Brand"
        datePublished="2023-05-16T08:00:00+00:00"
        dateModified="2023-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}