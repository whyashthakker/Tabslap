import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Reply Generator: Create Quick and Free Responses",
  description: "Discover the power of AI text reply generators that allow you to create quick and free responses. Streamline your communication and boost productivity with these helpful tools.",
  alternates: {
    canonical: "/blog/post/ai-text-reply-generator-free",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Reply Generator: Create Quick and Free Responses"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}