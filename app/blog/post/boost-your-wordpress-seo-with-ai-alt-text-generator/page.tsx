import { Metadata } from "next";
import { Content } from "./content";
import { StructuredData } from "../StructuredData";

export const metadata: Metadata = {
  title: "Boost Your WordPress SEO with AI Alt Text Generator",
  description: "Discover how AI alt text generator plugins for WordPress can improve your website's accessibility and SEO by automatically generating accurate and descriptive alt tags for images.",
  alternates: {
    canonical: "/blog/post/boost-your-wordpress-seo-with-ai-alt-text-generator",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData
        headline="Boost Your WordPress SEO with AI Alt Text Generator"
        datePublished="2024-06-05T08:00:00+00:00"
        dateModified="2024-06-05T08:00:00+00:00"
        authorName="Yash Thakker"
        authorUrl="https://goyashy.com"
        image={[]}
      />
      <Content />
    </>
  );
}