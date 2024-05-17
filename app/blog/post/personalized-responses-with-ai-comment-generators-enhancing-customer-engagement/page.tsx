import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Personalized Responses with AI Comment Generators: Enhancing Customer Engagement",
  description: "Discover how AI comment generators can create personalized responses to enhance customer engagement on social media platforms. Learn about the techniques and benefits of personalized comment generation.",
  alternates: {
    canonical: "/blog/post/personalized-responses-with-ai-comment-generators-enhancing-customer-engagement",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Personalized Responses with AI Comment Generators: Enhancing Customer Engagement"
        datePublished="2024-05-17T08:00:00+00:00"
        dateModified="2024-05-17T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}