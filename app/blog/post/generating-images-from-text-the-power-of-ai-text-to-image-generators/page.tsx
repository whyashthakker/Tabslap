import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Generating Images from Text: The Power of AI Text-to-Image Generators",
  description: "Discover the fascinating world of AI text-to-image generators, their inner workings, applications, and the impact they have on creative industries and beyond.",
  alternates: {
    canonical: "/blog/post/generating-images-from-text-the-power-of-ai-text-to-image-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Generating Images from Text: The Power of AI Text-to-Image Generators"
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