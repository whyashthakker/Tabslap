import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Will AI Comment Generators Evolve in the Next Five Years?",
  description: "Discover the future trends and advancements in AI comment generation over the next five years, from enhanced natural language understanding to multimodal integration and ethical considerations.",
  alternates: {
    canonical: "/blog/post/how-will-ai-comment-generators-evolve-in-the-next-five-years",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Will AI Comment Generators Evolve in the Next Five Years?"
        datePublished="2024-05-21T08:00:00+00:00"
        dateModified="2024-05-21T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}