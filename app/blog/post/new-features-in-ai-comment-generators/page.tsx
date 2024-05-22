import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "New Features in AI Comment Generators: Enhancing Engagement and Efficiency",
  description: "Discover the latest developments and new features in AI comment generators that are revolutionizing online engagement and streamlining content creation.",
  alternates: {
    canonical: "/blog/post/new-features-in-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="New Features in AI Comment Generators: Enhancing Engagement and Efficiency"
        datePublished="2024-05-22T08:00:00+00:00"
        dateModified="2024-05-22T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}