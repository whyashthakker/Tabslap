import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Ethical Considerations for AI Comment Generators",
  description: "Explore the key ethical considerations surrounding AI comment generators, including transparency, bias, accountability, and the impact on online discourse.",
  alternates: {
    canonical: "/blog/post/ethical-considerations-for-ai-comment-generators",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Ethical Considerations for AI Comment Generators"
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