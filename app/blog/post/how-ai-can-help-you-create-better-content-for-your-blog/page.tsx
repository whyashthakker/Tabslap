import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "How AI Can Help You Create Better Content for Your Blog",
  description: "Discover how AI tools can revolutionize your blog content creation process, improve quality, and boost engagement with your audience.",
  alternates: {
    canonical: "/blog/post/how-ai-can-help-you-create-better-content-for-your-blog",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="How AI Can Help You Create Better Content for Your Blog"
        datePublished="2024-05-27T08:00:00+00:00"
        dateModified="2024-05-27T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}