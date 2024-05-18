import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Sentiment Analysis in AI Comment Generators: Understanding User Emotions",
  description: "Explore how AI comment generators can analyze the sentiment of user comments, providing valuable insights into user emotions and opinions.",
  alternates: {
    canonical: "/blog/post/sentiment-analysis-in-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Sentiment Analysis in AI Comment Generators: Understanding User Emotions"
        datePublished="2024-05-18T08:00:00+00:00"
        dateModified="2024-05-18T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}