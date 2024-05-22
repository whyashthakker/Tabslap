import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Enhancing User Experience with AI Comment Generators",
  description: "Discover how AI comment generators are revolutionizing user experience by providing personalized, efficient, and engaging interactions across various platforms.",
  alternates: {
    canonical: "/blog/post/enhancing-user-experience-with-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Enhancing User Experience with AI Comment Generators"
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