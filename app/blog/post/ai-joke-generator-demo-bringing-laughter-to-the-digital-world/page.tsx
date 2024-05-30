import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Joke Generator Demo: Bringing Laughter to the Digital World",
  description: "Discover the power of AI in generating hilarious jokes with our AI Joke Generator Demo. Learn how AI is revolutionizing the world of comedy and entertainment.",
  alternates: {
    canonical: "/blog/post/ai-joke-generator-demo-bringing-laughter-to-the-digital-world",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Joke Generator Demo: Bringing Laughter to the Digital World"
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