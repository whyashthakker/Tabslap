import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Harnessing the Power of AI Text Generators for Arabic Content Creation",
  description: "Discover how AI text generators can revolutionize Arabic content creation, streamline the writing process, and enhance the quality of Arabic text. Learn about the benefits and applications of AI-powered Arabic text generation.",
  alternates: {
    canonical: "/blog/post/harnessing-the-power-of-ai-text-generators-for-arabic-content-creation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Harnessing the Power of AI Text Generators for Arabic Content Creation"
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