import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Crafting the Perfect Cover Letter: How AI Text Generators Revolutionize Job Applications",
  description: "Discover how AI text generators are transforming the way job seekers create compelling cover letters. Learn how these innovative tools streamline the writing process and increase the chances of landing an interview.",
  alternates: {
    canonical: "/blog/post/crafting-the-perfect-cover-letter-how-ai-text-generators-revolutionize-job-applications",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Crafting the Perfect Cover Letter: How AI Text Generators Revolutionize Job Applications"
        datePublished="2024-06-03T08:00:00+00:00"
        dateModified="2024-06-03T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}