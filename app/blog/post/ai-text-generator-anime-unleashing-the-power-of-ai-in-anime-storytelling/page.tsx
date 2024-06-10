import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Anime: Unleashing the Power of AI in Anime Storytelling",
  description: "Explore how AI text generators are transforming the anime industry, enabling creators to generate captivating stories, characters, and dialogues.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-anime-unleashing-the-power-of-ai-in-anime-storytelling",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Anime: Unleashing the Power of AI in Anime Storytelling"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}