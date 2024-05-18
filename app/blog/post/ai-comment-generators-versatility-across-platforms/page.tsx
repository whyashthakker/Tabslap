import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Comment Generators: Versatility Across Social Media Platforms",
  description: "Explore the capabilities of AI comment generators in creating comments for various social media platforms. Discover how AI can adapt to different platforms and enhance your overall social media presence.",
  alternates: {
    canonical: "/blog/post/ai-comment-generators-versatility-across-platforms",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Comment Generators: Versatility Across Social Media Platforms"
        datePublished="2024-05-16T08:00:00+00:00"
        dateModified="2024-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}