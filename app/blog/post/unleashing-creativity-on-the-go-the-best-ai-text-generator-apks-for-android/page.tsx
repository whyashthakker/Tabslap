import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Unleashing Creativity on the Go: The Best AI Text Generator APKs for Android",
  description: "Discover the top AI text generator APKs for Android devices that enable you to generate high-quality content, overcome writer's block, and boost your writing productivity anytime, anywhere.",
  alternates: {
    canonical: "/blog/post/unleashing-creativity-on-the-go-the-best-ai-text-generator-apks-for-android",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Unleashing Creativity on the Go: The Best AI Text Generator APKs for Android"
        datePublished="2024-06-10T08:00:00+00:00"
        dateModified="2024-06-10T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}