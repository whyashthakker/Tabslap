import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing Creativity with AI Text-to-Image Generators",
  description: "Discover the fascinating world of AI text-to-image generators and how they are revolutionizing the way we create and visualize content. Explore the technology behind these tools, their applications, and the impact they have on various industries.",
  alternates: {
    canonical: "/blog/post/unleashing-creativity-with-ai-text-to-image-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing Creativity with AI Text-to-Image Generators"
        datePublished="2024-05-31T08:00:00+00:00"
        dateModified="2024-05-31T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}