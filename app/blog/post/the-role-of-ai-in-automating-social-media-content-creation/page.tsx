import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Role of AI in Automating Social Media Content Creation",
  description: "Explore how AI is revolutionizing social media content creation, enabling marketers to automate processes, personalize content, and drive better results.",
  alternates: {
    canonical: "/blog/post/the-role-of-ai-in-automating-social-media-content-creation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Role of AI in Automating Social Media Content Creation"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}