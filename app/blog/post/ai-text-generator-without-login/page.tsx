import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "AI Text Generator Without Login: Effortless Content Creation for Everyone",
  description: "Discover the convenience of AI text generators that don't require login. Learn how these tools make content creation accessible and hassle-free for everyone.",
  alternates: {
    canonical: "/blog/post/ai-text-generator-without-login",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="AI Text Generator Without Login: Effortless Content Creation for Everyone"
        datePublished="2024-05-30T08:00:00+00:00"
        dateModified="2024-05-30T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}