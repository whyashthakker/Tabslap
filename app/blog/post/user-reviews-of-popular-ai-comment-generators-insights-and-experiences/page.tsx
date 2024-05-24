import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "User Reviews of Popular AI Comment Generators: Insights and Experiences",
  description: "Discover what users have to say about popular AI comment generators. Learn about their experiences, the pros and cons, and how these tools have impacted their social media engagement.",
  alternates: {
    canonical: "/blog/post/user-reviews-of-popular-ai-comment-generators-insights-and-experiences",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="User Reviews of Popular AI Comment Generators: Insights and Experiences"
        datePublished="2024-05-23T08:00:00+00:00"
        dateModified="2024-05-23T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}