import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Revolutionizing Customer Engagement with AI Text Generator Chatbots",
  description: "Discover how AI text generator chatbots are transforming customer engagement, enhancing support, and driving business growth through intelligent, human-like conversations.",
  alternates: {
    canonical: "/blog/post/revolutionizing-customer-engagement-with-ai-text-generator-chatbots",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Revolutionizing Customer Engagement with AI Text Generator Chatbots"
        datePublished="2024-06-11T08:00:00+00:00"
        dateModified="2024-06-11T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}