import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Ahrefs AI Text Generator: Empowering SEO-Driven Content Creation",
  description: "Discover how Ahrefs AI Text Generator is transforming content creation for SEO professionals and marketers, driving organic traffic and boosting search engine rankings.",
  alternates: {
    canonical: "/blog/post/ahrefs-ai-text-generator-empowering-seo-driven-content-creation",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Ahrefs AI Text Generator: Empowering SEO-Driven Content Creation"
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