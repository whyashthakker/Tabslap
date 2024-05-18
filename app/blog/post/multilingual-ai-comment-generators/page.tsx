import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Multilingual AI Comment Generators: Enabling Global Conversations",
  description: "Discover how AI comment generators with multilingual support are breaking down language barriers and enabling global conversations across diverse online communities.",
  alternates: {
    canonical: "/blog/post/multilingual-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Multilingual AI Comment Generators: Enabling Global Conversations"
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