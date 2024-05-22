import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Can AI Comment Generators Improve Engagement in Online Forums?",
  description: "Explore the potential of AI comment generators in enhancing user engagement, fostering meaningful discussions, and building vibrant communities in online forums.",
  alternates: {
    canonical: "/blog/post/how-can-ai-comment-generators-improve-engagement-in-online-forums",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Can AI Comment Generators Improve Engagement in Online Forums?"
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