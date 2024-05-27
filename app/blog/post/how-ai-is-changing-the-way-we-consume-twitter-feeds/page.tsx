import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How AI is Changing the Way We Consume Twitter Feeds",
  description: "Explore how artificial intelligence is revolutionizing the way we interact with and consume content on Twitter, making our feeds more personalized and engaging.",
  alternates: {
    canonical: "/blog/post/how-ai-is-changing-the-way-we-consume-twitter-feeds",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How AI is Changing the Way We Consume Twitter Feeds"
        datePublished="2024-05-25T08:00:00+00:00"
        dateModified="2024-05-25T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}