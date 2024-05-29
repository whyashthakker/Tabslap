import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unlocking Creativity with AI Quote Generators: Inspiring Insights at Your Fingertips",
  description: "Discover how AI quote generators are revolutionizing the way we access and share inspiring insights, empowering creativity and personal growth.",
  alternates: {
    canonical: "/blog/post/unlocking-creativity-with-ai-quote-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unlocking Creativity with AI Quote Generators: Inspiring Insights at Your Fingertips"
        datePublished="2024-05-29T08:00:00+00:00"
        dateModified="2024-05-29T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}