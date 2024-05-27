import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Harnessing AI to Summarize YouTube Comments: Tools and Techniques",
  description: "Discover how to leverage AI tools and techniques to effectively summarize YouTube comments, saving time and extracting valuable insights from viewer feedback.",
  alternates: {
    canonical: "/blog/post/harnessing-ai-to-summarize-youtube-comments-tools-and-techniques",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Harnessing AI to Summarize YouTube Comments: Tools and Techniques"
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