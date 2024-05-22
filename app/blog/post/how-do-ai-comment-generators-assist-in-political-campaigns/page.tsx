import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How Do AI Comment Generators Assist in Political Campaigns?",
  description: "Discover the role of AI comment generators in modern political campaigns, from shaping public opinion to engaging voters and analyzing sentiment.",
  alternates: {
    canonical: "/blog/post/how-do-ai-comment-generators-assist-in-political-campaigns",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How Do AI Comment Generators Assist in Political Campaigns?"
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