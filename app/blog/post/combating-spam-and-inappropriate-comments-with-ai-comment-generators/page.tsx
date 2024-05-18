import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Combating Spam and Inappropriate Comments with AI Comment Generators",
  description: "Learn how AI comment generators effectively handle spammy and inappropriate comments, ensuring a safe and clean online conversation environment.",
  alternates: {
    canonical: "/blog/post/combating-spam-and-inappropriate-comments-with-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Combating Spam and Inappropriate Comments with AI Comment Generators"
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