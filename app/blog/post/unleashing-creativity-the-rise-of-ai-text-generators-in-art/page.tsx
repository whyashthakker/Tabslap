import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing Creativity: The Rise of AI Text Generators in Art",
  description: "Explore the fascinating world of AI text generators and their impact on the art industry. Discover how these innovative tools are revolutionizing artistic expression and opening up new possibilities for creators.",
  alternates: {
    canonical: "/blog/post/unleashing-creativity-the-rise-of-ai-text-generators-in-art",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing Creativity: The Rise of AI Text Generators in Art"
        datePublished="2024-06-03T08:00:00+00:00"
        dateModified="2024-06-03T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}