import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Making AI-Generated Comments Sound More Human: Tips and Techniques",
  description: "Discover effective tips and techniques to make AI-generated comments sound more human and engaging. Learn how to create authentic and personalized interactions that resonate with your audience.",
  alternates: {
    canonical: "/blog/post/making-ai-comments-sound-human",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Making AI-Generated Comments Sound More Human: Tips and Techniques"
        datePublished="2024-05-16T08:00:00+00:00"
        dateModified="2024-05-16T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}