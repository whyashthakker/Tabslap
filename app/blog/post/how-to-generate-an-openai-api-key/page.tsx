import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How to Generate an OpenAI API Key: A Step-by-Step Guide",
  description: "Learn how to generate an OpenAI API key to access powerful language models and integrate AI capabilities into your applications and projects.",
  alternates: {
    canonical: "/blog/post/how-to-generate-an-openai-api-key",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How to Generate an OpenAI API Key: A Step-by-Step Guide"
        datePublished="2024-05-28T08:00:00+00:00"
        dateModified="2024-05-28T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}