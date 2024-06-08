import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "The Power of AI in URL Extensions: Enhancing User Experience and SEO",
  description: "Discover how AI-powered URL extensions can revolutionize user experience, improve SEO, and drive organic traffic to your website.",
  alternates: {
    canonical: "/blog/post/the-power-of-ai-in-url-extensions-enhancing-user-experience-and-seo",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="The Power of AI in URL Extensions: Enhancing User Experience and SEO"
        datePublished="2024-06-08T08:00:00+00:00"
        dateModified="2024-06-08T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}